import { Alert, StyleSheet, View, Text, TextInput, Button } from "react-native";
import React from "react";
import { stylesLogin } from "./styles";
 
const login = (): React.JSX.Element => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
 
  const validateEmail = (email: string): boolean => {
    const recheckEmail = /\S+@\S+\.\S+/;
    return recheckEmail.test(email);
  };
 
  //![variable] = false value, [variable] = true
  const handleSubmit = () => {
    let errorMessage = "";
    // if (!name && !email && !password) {
    //   // Alert.alert("Alert", "Please Enter Name\nPlease Enter Email\nPlease Enter Password", [
    //   //   // {text: "OK"} set text to alert btn
    //   //   { text: "OK" },
    //   // ]);
    //   errorMessage += "Please Enter Name\nPlease Enter Email";
    // }
    if (!name) {
      // Alert.alert("Alert", "Please Enter Name");
      errorMessage += "Please Enter Name\n";
    }
    if (!email) {
      // Alert.alert("Alert", "Please Enter Email");
      errorMessage += "Please Enter Email\n";
    } else if (!validateEmail(email)) {
      errorMessage = "Invalid Email Format\n";
    }
    if (!password) {
      // Alert.alert("Alert", "Please Enter Password");
      errorMessage += "Please Enter Password\n";
    } else if (password.length < 6) {
      // Alert.alert("Alert", "Password must be atleast 6 characters");
      errorMessage += "Password must be atleast 6 characters";
    }
    if (errorMessage) {
      Alert.alert("Error", errorMessage.trim(),);
      return;
    }
    Alert.alert("Alert", "Success");
  };
 
  return (
    <View style={stylesLogin.container}>
      <View style={stylesLogin.container}>
        <TextInput
          style={stylesLogin.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={stylesLogin.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={stylesLogin.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Button title="Submit" onPress={handleSubmit} color="#007EA7" />
      </View>
    </View>
  );
};
 
export default login;