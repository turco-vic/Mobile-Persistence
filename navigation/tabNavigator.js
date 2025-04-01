import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Detalhes from "../pages/Detalhes"; 
import Perfil from "../pages/Perfil"; 
import Home from "../pages/Home";
import Icon from "react-native-vector-icons/Ionicons";
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator(); 

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size }) => ( 
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            /> 
            <Tab.Screen 
                name="Details" 
                component={Detalhes} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="linechart" size={size} color={color}  />
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Perfil} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
