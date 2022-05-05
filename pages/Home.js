import React from 'react'
import {View, Text, Button, useColorScheme, ScrollView} from 'react-native'
import ColorScheme from '../utils/ColorScheme';
import { StatusBar } from "expo-status-bar"
import BigNavigationButton from '../components/BigNavigationButton'


const Home = ({navigation}) => {
    const colorScheme = ColorScheme(useColorScheme())

    return (
        <ScrollView style={colorScheme.body}>
            <Text style={colorScheme.title}>
                Home
            </Text>
            <View style={colorScheme.container}>
                <BigNavigationButton
                    text="pokemon"
                    icon=""
                />
                <BigNavigationButton
                    text="pokemon"
                    icon=""
                />
                <BigNavigationButton
                    text="pokemon"
                    icon=""
                />
                <BigNavigationButton
                    text="pokemon"
                    icon=""
                />
            </View>
            <Button 
                onPress={() => navigation.navigate('Favorites')} 
                title="favoritos"
            />
        </ScrollView>
    )
}

export default Home