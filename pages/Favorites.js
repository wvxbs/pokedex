import { Text, View, Button, useColorScheme } from "react-native"
import ColorScheme from "../utils/ColorScheme"


const Favorites = ({navigation}) => {
    const colorScheme = ColorScheme(useColorScheme())

    return(
        <View style={colorScheme.container}>
            <Text style={colorScheme.title}>
                Favoritos
            </Text>
            <Button 
                onPress={() => navigation.navigate('Home')} 
                title="home"
            />
        </View>
    )

}

export default Favorites