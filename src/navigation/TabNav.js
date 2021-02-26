import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// Screens
import Home from '../screens/Home'
import Repositorios from '../screens/Repositorios'
import FollowerNav from '../navigation/FollowerNav'
import FollowingNav from '../navigation/FollowingNav'

export default function TabNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} getId={({ params }) => params.username}/>
            <Tab.Screen name="Repos" component={Repositorios} />
            <Tab.Screen name="Seguidores" component={FollowerNav}/>
            <Tab.Screen name="Seguindo" component={FollowingNav} />
        </Tab.Navigator>
    );
}