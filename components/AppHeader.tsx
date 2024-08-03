import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

interface AppHeader{
  fullname: string;
  message: string;
}



const AppHeader = ({ fullname,message }: AppHeader): React.JSX.Element => {
  return (
    <View style={stylesPractice.header}>
        <Text style={stylesPractice.headerText}>{fullname}</Text>
        <Text style={stylesPractice.subtitleText}>{message}</Text>
    </View>
  );
};

export default AppHeader;
    
    
