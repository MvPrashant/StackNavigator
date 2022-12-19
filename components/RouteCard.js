import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RouteCard = ({ title, onPressHandler }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onPressHandler()} style={styles.pressable}>
        <Text style={styles.titleStyle}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginLeft: 10,
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginLeft: 10,
    backgroundColor: "#5cb9f2",
    padding: 5,
    borderRadius: 5,
  },
});
export default RouteCard;
