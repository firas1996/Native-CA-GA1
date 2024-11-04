import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/Screens/Home";
import Contact from "./src/Screens/Contact";
import Profile from "./src/Screens/Profile";
import Notif from "./src/Screens/Notif";
export default function App() {
  const Stack = createStackNavigator();
  const Drower = createDrawerNavigator();
  return (
    <>
      <NavigationContainer>
        <Drower.Navigator>
          <Drower.Screen name="Home" component={Home} />
          <Drower.Screen name="Contact" component={Contact} />
          <Drower.Screen name="Profile" component={Profile} />
          <Drower.Screen name="Notif" component={Notif} />
        </Drower.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
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
