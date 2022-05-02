import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Appearance, useColorScheme } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    let colorScheme = useColorScheme()

    if (colorScheme === 'dark') 
      return Theme(darkMode)

    return Theme(lightMode)
  
}

function Theme(theme) {
  return(
    <NavigationContainer>
      <View style={theme.container}>
        <Text style={theme.title}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  )
}


const lightMode = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#41007f'
  }
})

const darkMode = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20003f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#dfbfff'
  }
})