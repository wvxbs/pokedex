import React from 'react'
import {View, Text, Button, useColorScheme} from 'react-native'
import ColorScheme from '../utils/ColorScheme';

const Home = ({navigation}) => {
    const colorScheme = ColorScheme(useColorScheme())

    return (
        <View style={colorScheme.container}>
            <Text style={colorScheme.title}>
                Home
            </Text>
            <Button 
                onPress={() => navigation.navigate('Favorites')} 
                title="favoritos"
            />
        </View>
    )
}

export default Home