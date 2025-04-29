import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import TabNavigator from "./src/navigation/TabNavigator";
import InitialScreen from "./src/navigation/InitialScreen";
import CreateEventScreen from "./src/screens/CreateEventScreen";
import EventScreenDetails from "./src/screens/EventScreenDetails";
import GameProccessScreen from "./src/screens/GameProccessScreen";
const Stack = createStackNavigator();

const leftCu = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {navigation.goBack()}} style={{marginLeft: 16, transform: [{scaleX: -1}]}}>

        </TouchableOpacity>
        )
    }

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    {/*<BackgroundMusic />*/}
                    <Stack.Navigator screenOptions={{
                        headerStyle: { backgroundColor: '#000000', },
                        headerLeft: leftCu,
                        headerTitle: () => (
                            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', width: '100%'}}>
                            {/*<Text>*/}
                            {/*    Wonders of Holland*/}
                            {/*</Text>*/}
                            </View>
                        ),
                        headerShadowVisible: false,
                    }}>

                        <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MainTab" component={TabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="CreateEventScreen" component={CreateEventScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="EventScreenDetails" component={EventScreenDetails} options={{ headerShown: false }} />
                        <Stack.Screen name="GameProccessScreen" component={GameProccessScreen} options={{ headerShown: false }} />

                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
