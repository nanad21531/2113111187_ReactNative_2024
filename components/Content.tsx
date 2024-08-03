import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { stylesPractice } from '../styles/styles'



type fullnameType = {
//  fullname: string;
  message: string;
  onButtonClick:()=> void;
}
const Content = ({ message, onButtonClick }: fullnameType): React.JSX.Element => {
//   const [displayFullname, setDisplayFullname] = useState('');
//   const onClickMe = () => {
//     setDisplayFullname(fullname);
//     Alert.alert("Hello", `Imput your full name : ${fullname} `);
//     Alert.alert("Hello", message);
//  };

  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
       {/* <Text style={stylesPractice.text}>{fullname}</Text>  */}
      {/* <Text style={stylesPractice.text}>{displayFullname}</Text> */}
      <Button title="ClickMe" onPress={onButtonClick} />
    </View>
  )
};

export default Content



