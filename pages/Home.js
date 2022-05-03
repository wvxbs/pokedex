import React from 'react'
import {View, Text, Button, useColorScheme, ScrollView} from 'react-native'
import ColorScheme from '../utils/ColorScheme';
import { StatusBar } from "expo-status-bar"


const Home = ({navigation}) => {
    const colorScheme = ColorScheme(useColorScheme())

    return (
        <ScrollView style={colorScheme.body}>
            <Text style={colorScheme.title}>
                Home
            </Text>
            <Button 
                onPress={() => navigation.navigate('Favorites')} 
                title="favoritos"
            />
        </ScrollView>
    )
}

export default Home