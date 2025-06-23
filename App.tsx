import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import TabNavigator from "./src/navigation/TabNavigator";
import InitialScreen from "./src/navigation/InitialScreen";
import CreateEventScreen from "./src/screens/CreateEventScreen";
import EventScreenDetails from "./src/screens/EventScreenDetails";
import GameProccessScreen from "./src/screens/GameProccessScreen";
import BreathingScreen from "./src/screens/BreathingScreen";
import DeveloperInfoScreen from "./src/screens/DeveloperInfoScreen";
const Stack = createStackNavigator();


export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{

                    }}>

                        <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MainTab" component={TabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="CreateEventScreen" component={CreateEventScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="EventScreenDetails" component={EventScreenDetails} options={{ headerShown: false }} />
                        <Stack.Screen name="GameProccessScreen" component={GameProccessScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="BreathingScreen" component={BreathingScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="DeveloperInfoScreen" component={DeveloperInfoScreen} options={{ headerShown: false }} />

                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
