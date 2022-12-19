import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import RouteCard from "../components/RouteCard";

const Profile = ({ navigation }) => {
  console.log("Profile Screen ");
  return (
    <View style={{ marginVertical: 100, padding: 30 }}>
      <Text style={{ color: "red" }}>Profile Screen</Text>

      <RouteCard
        title="HistoryScreen"
        onPressHandler={() => {
          navigation.navigate("HistoryScreen");
        }}
      />
      <RouteCard
        title="Go Back"
        onPressHandler={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
