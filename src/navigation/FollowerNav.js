import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Seguidores from '../screens/Seguidores'
import Perfil from '../screens/Perfil'

const Stack = createStackNavigator();

export default function FollowerNav () {
    return (
        <Stack.Navigator
            initialRouteName="Seguidores"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Seguidores' component={Seguidores}
                options={{
                    
                }}
            />
            <Stack.Screen 
                name='Perfil' component={Perfil}
                options={{

                }}
            />
        </Stack.Navigator>
    )
}