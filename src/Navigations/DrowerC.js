import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const DrowerC = () => {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 25 }}>
      <DrawerItem
        label="Contact"
        onPress={() => {
          navigation.navigate("Contact");
        }}
      />
      <DrawerItem
        label="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label="Notif"
        onPress={() => {
          navigation.navigate("Notif");
        }}
      />
    </View>
  );
};

export default DrowerC;

const styles = StyleSheet.create({});
