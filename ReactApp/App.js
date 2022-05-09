import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

// import Tabs from "./src/navigation/Tabs";
import Tabs from "./src/navigation/Tabs";
import LearnScreen from "./src/screens/learnViews/LearnScreen";
// import OverviewScreen from "./src/screens/OverviewScreen";
import React from "react";
import InfoScreen from "./src/screens/account/InfoScreen";
// import LoginScreen1 from "./src/screens/LoginScreen1";
// import LoginScreen from "./src/screens/LoginScreen";
import SignInScreen from './src/screens/authen/SignInScreen';
import SignUpScreen from './src/screens/authen/SignUpScreen';
import SchoolScreen from './src/screens/learnViews/SchoolScreen';
import TypeScreen from './src/screens/util/BlockType';
import ListenScreen from './src/screens/learnViews/ListenScreen';
import CombinedScreen from './src/screens/learnViews/CombinedScreen';
// import * as Google from "expo-google-app-auth";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createStackNavigator();
const Stack2 = createStackNavigator();


export default function App() {
  const loginState = 1;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {loginState == 1 ? (
          <Stack.Group screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Login" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Group>
        ) : (
          // <Stack.Screen name="BlockLearn" component={BlockLearn} />
          <Stack.Group>
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen
              name="School"
              component={SchoolScreen}
              // navigation={navigation}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen name="Type" component={TypeScreen} />
            <Stack.Screen name="Listen" component={ListenScreen} />
            <Stack.Screen name="Combined" component={CombinedScreen} />
          </Stack.Group>

          // maybe we can move on between group by navigation.
          // This is an IDEA DON"T DELETE it.

          // <Stack.Screen name="SchoolScreen" component={SchoolScreen} />
        )}
      </Stack.Navigator>
      {/* // <Stack2.Screen name="SchoolScreen" component={SchoolScreen} /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
