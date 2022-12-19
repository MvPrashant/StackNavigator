import { Text, View } from "react-native";
import React from "react";

const DocumentScreen = ({navigation}) => {
  log("Document Screen");
  return (
    <View>
      <Text>Document Screen</Text>
      <Pressable onPress={navigation.goBack()}/>        
      
    </View>
  );
};

export default DocumentScreen;

