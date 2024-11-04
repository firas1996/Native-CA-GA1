import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Stack from "./Stack";

const Drower = () => {
  const DrowerN = createDrawerNavigator();

  return (
    <DrowerN.Navigator>
      <DrowerN.Screen name="Home" component={Stack} />
    </DrowerN.Navigator>
  );
};

export default Drower;

const styles = StyleSheet.create({});
