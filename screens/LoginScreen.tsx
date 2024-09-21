import { View } from 'react-native'
import React from 'react'
import { Text, Card, Input, Button } from "@rneui/base";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { login } from "../service/auth-servuce";
import { AxiosError } from "../service/http-service"
import Toast from 'react-native-toast-message';

const LoginScreen = (): React.JSX.Element => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please input email")
      .email("Email format is invalid."),
    password: yup
      .string()
      .required("Please input password")
      .min(3, "Password must be at least 3 characters."),
  });

  //React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  }); //end of useForm
  const onLogin = async (data: any) => {
    try {
      const response = await login(data.email, data.password);
      //status 200 >> Success
      if (response.status === 200) {
        //ถ้ากรอกอีเมลและรหัสผ่านถูกต้องจะแสดงข้อความ login success ที่ terminal
       // console.log("login success");
       Toast.show({type:'success',text1:'Login success'})
      }
    } catch (error: any) {
      //handle error from Axios TypeScript
      let err: AxiosError<any> = error; // แปลงข้อผิดพลาดเป็น AxiosError อย่างชัดเจน
      //status 401
      if (err.response?.status === 401) {
        //console.log(err.response.data.message);
        Toast.show({type:'error',text1:err.response.data.message})
      } else {
        //console.log('เกิดข้อผิดพลาด ไม่สามารถติดต่อ Server ได้');
        Toast.show({type:'error',text1:'เกิดข้อผิดพลาด ไม่สามารถติดต่อ Server ได้'})
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h2>Thai-Nichi</Text>
      <Card containerStyle={{ padding: 10, width: "90%" }}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Email"
              leftIcon={{ name: "email" }}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Password"
              leftIcon={{ name: "key" }}
              keyboardType="number-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Button
          size="lg"
          title="Log In"
          onPress={handleSubmit(onLogin)}
          loading={isSubmitting}
          disabled={!isValid} //ปุ่มกดจะกดไมได้(isible) จนกว่ากรอก username,password
        />
      </Card>
    </View>
  );
};

export default LoginScreen;
