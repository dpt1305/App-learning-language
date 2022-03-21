import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

import Tabs from "./src/navigation/Tabs"
import LearnScreen from "./src/screens/LearnScreen"
import OverviewScreen from "./src/screens/OverviewScreen"
import LoginScreen1 from "./src/screens/LoginScreen1";
import React from "react";

// import * as Google from "expo-google-app-auth";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const isLogin = Google.isConnectAsync();
// console.log(isLogin);

export default function App() {
  return (
    // <Stack.Navigator screenOptions={{ headerShown: false }}>
    //   {/* <Stack.Screen name="LearnScreen" component={LearnScreen} /> */}
    //   <Stack.Screen name="Login" component={LoginScreen} />

    // </Stack.Navigator>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Account" component={LoginScreen} />
    //     <Tab.Screen name="Learn" component={LearnScreen} />
    //     <Tab.Screen name="Overview" component={OverviewScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Login1" component={LoginScreen1} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Learn" component={LearnScreen} />
        </Stack.Group>
      </Stack.Navigator>
      {/* <Stack.Group>
        <Stack.Screen />
      </Stack.Group>
      <Stack.Screen name="Tabs" component={Tabs} /> */}
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
