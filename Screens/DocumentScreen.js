import { Text, View } from "react-native";
import React from "react";
import RouteCard from "../components/RouteCard";

const DocumentScreen = ({ navigation }) => {
  console.log("Document Screen");
  return (
    <View style={{ marginVertical: 100, padding: 30 }}>
      <Text style={{ color: "red" }}>Document Screen</Text>
      <RouteCard
        title="Go Back"
        onPressHandler={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default DocumentScreen;
