import { Pressable, Text, View } from "react-native";
import React from "react";

const DocumentScreen = ({ navigation }) => {
  console.log("Document Screen");
  return (
    <View>
      <Text>Document Screen</Text>
      {/* <Pressable title onPress={navigation.goBack()}>
        <Text> Go Back</Text>
      </Pressable> */}
    </View>
  );
};

export default DocumentScreen;
