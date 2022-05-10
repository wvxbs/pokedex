import React from 'react'
import { View, Button } from 'react-native'
import BaseStyle from '../styles/BaseStyle'

const BigNavigationButton = (props, { navigation }) => {
  return (
    <View style={BaseStyle.BigNavigationButton}>
      <Button styl={BaseStyle.BigNavigationButton} title={props.text} />
    </View>
  )
}
export default BigNavigationButton

