import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, Settings, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';
import TimerScreen from '../screens/TimerScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#001453' },
                headerTitle:"",
                headerShown: false,
                headerShadowVisible: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    paddingTop: 10,
                    backgroundColor: '#211C84',
                    borderRadius: 20,
                    height: 60,
                    width: '90%',
                    marginLeft: '5%',
                    borderTopWidth: 0,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                    elevation: 5,
                },
            })}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        return <Image source={require('../assets/img/Frame-2.png')} />;
                    },
                }}
            />
            <Tab.Screen
                name="TimerScreen"
                component={TimerScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        return <Image source={require('../assets/img/Layer_1.png')} />;
                    },
                }}
            />
            <Tab.Screen
                name="CalendarScreen"
                component={CalendarScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        return <Image source={require('../assets/img/Frame-3.png')} />;
                    },
                }}
            />
            {/*<Tab.Screen*/}
            {/*    name="GameScreen"*/}
            {/*    component={GameScreen}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: '',*/}
            {/*        tabBarIcon: ({ focused }) => {*/}
            {/*            return <Image source={require('../assets/img/Frame-4.png')} />;*/}
            {/*        },*/}
            {/*    }}*/}
            {/*/>*/}
            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        return <Image source={require('../assets/img/Frame-5.png')} />;
                    },
                }}
            />


        </Tab.Navigator>
    );
};

export default TabNavigator;
