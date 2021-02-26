import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Seguindo from '../screens/Seguindo'
import Perfil from '../screens/Perfil'

const Stack = createStackNavigator();

export default function FollowingNav () {
    return (
        <Stack.Navigator
            initialRouteName="Seguido"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Seguindos' component={Seguindo}
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