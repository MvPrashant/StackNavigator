import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import HistoryScreen from "./Screens/HistoryScreen";
import Profile from "./Screens/Profile";
import DocumentScreen from "./Screens/DocumentScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { DashboardScreen } from "./Screens/DashboardScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="DashboardScreen"
      >
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="DocumentScreen" component={DocumentScreen} />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
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

{
  /* <SafeAreaProvider Style={styles.container}>
  <ScreenNavigator />
</SafeAreaProvider> */
}
