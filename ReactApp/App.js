import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

// import Tabs from "./src/navigation/Tabs";
import Tabs from "./src/navigation/Tabs";
import LearnScreen from "./src/screens/LearnScreen";
import OverviewScreen from "./src/screens/OverviewScreen";
import React from "react";
import InfoScreen from "./src/screens/account/InfoScreen";
import LoginScreen1 from "./src/screens/LoginScreen1";
import LoginScreen from "./src/screens/LoginScreen";
import BlockLearn from "./src/screens/util/BlockLearnScreen";

// import * as Google from "expo-google-app-auth";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const isLogin = Google.isConnectAsync();
// console.log(isLogin);

export default function App() {
  const loginState = 0;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {loginState == 1 ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen name="BlockLearn" component={BlockLearn} />
          // <Stack.Screen name="Home" component={Tabs} />
        )}
      </Stack.Navigator>
      {/* <Tabs /> */}
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
