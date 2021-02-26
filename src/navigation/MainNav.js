import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

// Tab Navigator
import TabNav from './TabNav'

// Screens
import Login from '../screens/Login'

const Stack = createStackNavigator();

export default function MainNav () {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name='Login' component={Login}
                    options={{
                        
                    }}
                />
                <Stack.Screen 
                    name='TabNav' component={TabNav}
                    options={{

                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}