import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import RouteCard from "../components/RouteCard";

export const DashboardScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  console.log("Dashboard");
  return (
    <View style={{ marginVertical: 100, padding: 30 }}>
      <Text style={{ color: "red" }}> Dashboard Screen </Text>

      <RouteCard
        title="DocumentScreen"
        onPressHandler={() => {
          navigation.navigate("DocumentScreen");
        }}
      />
      <RouteCard
        title="Profile"
        onPressHandler={() => {
          navigation.navigate("Profile");
        }}
      />
      
    </View>
  );
};
