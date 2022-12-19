import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DocumentScreen from "../Screens/DocumentScreen";
import HistoryScreen from "../Screens/HistoryScreen";
import Profile from "../Screens/Profile";
import { NavigationContainer } from "@react-navigation/native";

const ScreenNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DocumentScreen" components={DocumentScreen} />
        <Stack.Screen name="HistoryScreen" components={HistoryScreen} />
        <Stack.Screen name="Profile" components={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigator;
