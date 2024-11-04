import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Stack from "./Stack";
import DrowerC from "./DrowerC";

const Drower = () => {
  const DrowerN = createDrawerNavigator();

  return (
    <DrowerN.Navigator drawerContent={DrowerC}>
      <DrowerN.Screen name="Home" component={Stack} />
    </DrowerN.Navigator>
  );
};

export default Drower;

const styles = StyleSheet.create({});
