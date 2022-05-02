import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Favorites from "../pages/Favorites"
import Home from "../pages/Home"

const Stack = createNativeStackNavigator()

const StackNavigator= () => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = "Home" component={Home} 
                options={{
                    title: 'Pokedex'
                }}
            />
            <Stack.Screen 
                name = "Favorites" component={Favorites} 
                options={{
                    title: 'Favoritos'
                }}
            />
        </Stack.Navigator>
    )

    
}

export default StackNavigator