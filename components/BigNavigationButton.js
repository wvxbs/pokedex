import React from 'react'
import {View, Text, Button} from 'react-native'
import BaseStyle from '../styles/BaseStyle'

const BigNavigationButton = (props,{navigation}) => {
    return (
        <View style={BaseStyle.BigNavigationButton}>
            <Button 
                title={props.text}
            />
        </View>
    )
}

export default BigNavigationButton