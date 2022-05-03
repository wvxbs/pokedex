import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import { StatusBar } from 'expo-status-bar'; 

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar style='dark' />
      <MainNavigator/>
    </NavigationContainer>
  )
}