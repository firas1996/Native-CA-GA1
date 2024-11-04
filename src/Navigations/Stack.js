import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Contact from "../Screens/Contact";
import Profile from "../Screens/Profile";
import Notif from "../Screens/Notif";

const Stack = () => {
  const StackN = createStackNavigator();
  return (
    <StackN.Navigator screenOptions={{ headerShown: false }}>
      <StackN.Screen name="Home" component={Home} />
      <StackN.Screen name="Contact" component={Contact} />
      <StackN.Screen name="Profile" component={Profile} />
      <StackN.Screen name="Notif" component={Notif} />
    </StackN.Navigator>
  );
};

export default Stack;

const styles = StyleSheet.create({});
