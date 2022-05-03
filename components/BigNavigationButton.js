import React from 'react'
import {View, Text, Button} from 'react-native'
import ColorScheme from '../utils/ColorScheme';

const BigNavigationButton = ({navigation}) => {
    const colorScheme = ColorScheme(useColorScheme())

    return (
        <View style={colorScheme.body}>
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

export default BigNavigationButton