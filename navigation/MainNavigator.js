import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Favorites from "../pages/Favorites"
import Home from "../pages/Home"

const Stack = createNativeStackNavigator()

const StackNavigator= () => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = "Home" component={Home} 
                screenOptions={{
                    // headerStyle: {
                    //   backgroundColor: '#f4511e',
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //   fontWeight: 'bold',
                    // },
                    // headerLargeStyle : {
                    //     headerLargeTitle: true
                    // }
                }}
            />
            <Stack.Screen 
                name = "Favorites" component={Favorites} 
                options={{
                    title: 'Favoritos',

                }}
                screenOptions={{
                    // headerStyle: {
                    //   backgroundColor: '#f4511e',
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //   fontWeight: 'bold',
                    // },
                    // headerLargeStyle : {
                    //     headerLargeTitle: true
                    // }
                }}
            />
        </Stack.Navigator>
    )

    
}

export default StackNavigator