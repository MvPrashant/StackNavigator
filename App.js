import { StyleSheet, Text, View } from "react-native";
import DashboardScreen from "./Screens/DashboardScreen";

export default function App() {
  return (
    <View Style={styles.container}>
      <DashboardScreen />
    </View>
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
