import { View, Text, StyleSheet } from "react-native";
import React from "react";
import RouteCard from "../components/RouteCard";

const DashboardScreen = ({ navigation }) => {
  console.log("DashboardScreen");
  return (
    <View Style={styles.container}>
      <Text>DashboardScreen</Text>
      <RouteCard
        title="History Screen"
        onPressHandler={() => {
          navigation.navigate("HistoryScreen" );
        }}
      />
      <RouteCard
        title="DocumentScreen"
        onPressHandler={() => {
          navigation.navigate("DocumentScreen");
        }}
      />
      <RouteCard
        title="Profile"
        onPressHandler={() => {
          navigation.navigate( screen = "Profile" );
        }}
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     }
  });
