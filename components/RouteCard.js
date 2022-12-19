import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RouteCard = ({ title, onPressHandler }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onPressHandler && onPressHandler();
        }}
        style={styles.container}
      >
        <Text style={styles.titleStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleStyle: {
    flex: 1,
    marginLeft: 10,
  },
});
export default RouteCard;
