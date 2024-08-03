import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
 
export default function App(): React.JSX.Element {
 
 
  return (
    <View style={styles.container}>
      <AppHeader  title="Sarawut Siriyotha" message="Message from App.tsx" />
      <Content fullname="Sarawut Siriyotha" />
      <AppFooter />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
 