import React from 'react';
// import { Text,StyleSheet,View,TextInput,TouchableOpacity, Dimensions} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import signin from "./screens/signIn";
import signup from "./screens/signUp";
import names from "./screens/notesList";
import page from "./screens/createNote";
import note from "./screens/note";

const Stack = createStackNavigator();

export default function App () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Sign In">
                <Stack.Screen name="Sign In" component={signin}/>
                <Stack.Screen name="Sign Up" component={signup}/>
                <Stack.Screen name="Your Saved Notes" component={names}/>
                <Stack.Screen name="Create Note" component={page}/>
                <Stack.Screen name="Add Note" component={page}/>
                <Stack.Screen name="Your Notes" component={names}/>
                <Stack.Screen name="Notes" component={names}/>
                <Stack.Screen name="See Your Note" component={note}/>
                <Stack.Screen name="Notes List" component={names}/>
                <Stack.Screen name="Your Notes List" component={names}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}