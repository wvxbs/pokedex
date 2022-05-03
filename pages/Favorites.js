import { Text, View, Button, useColorScheme, ScrollView } from "react-native"
import ColorScheme from "../utils/ColorScheme"
import { StatusBar } from "expo-status-bar"

const Favorites = ({navigation}) => {
    const colorScheme = ColorScheme(useColorScheme())

    return(
        <ScrollView style={colorScheme.body}>
            <Text style={colorScheme.title}>
                Favoritos
            </Text>
            <Button 
                onPress={() => navigation.navigate('Home')} 
                title="home"
            />
        </ScrollView>
    )

}

export default Favorites