import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export const DashboardScreen = ({ navigation}) => {
  // const navigation = useNavigation();
  console.log("Dashboard");
  return (
    <View>
      <Text onPress={navigation.navigate('DocumentScreen')}>DashboardScreen</Text>
    </View>
  )
}

