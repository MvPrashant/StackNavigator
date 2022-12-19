import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RouteCard from '../components/RouteCard';

const HistoryScreen = ({ navigation}) => {
    console.log('HistoryScreen');
  return (
    <View style={{ marginVertical: 100, padding: 30 }}>
      <Text style={{ color: "red" }}>HistoryScreen</Text>

      <RouteCard
        title="Go Back"
        onPressHandler={() => {
          navigation.goBack();
        }}
      />
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({})