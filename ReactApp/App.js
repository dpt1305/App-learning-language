import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

import IntroScreen from "./src/screens/IntroScreen";

import OnboardScreen from "./src/screens/OnboardScreen";
import HomeScreen from "./src/screens/HomeScreen";
import TestScreen from "./src/screens/TestScreen";

// import IntroScreens from "./app/IntroScreens";
import React, { useEffect } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  // const [isFirstLaunched, setIsFirstLaunched] = React.useState(false);

  // useEffect(async () => {
  //   AsyncStorage.getItem("alreadyLaunched").then((value) => {
  //     if (value == null) {
  //       AsyncStorage.setItem("alreadyLaunched", "true");
  //       setIsFirstLaunched(true);
  //     } else {
  //       setIsFirstLaunched(false);
  //     }
  //   });
  // }, []);

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  // if (isFirstLaunched === null) {
  //   return null;
  // } else if (isFirstLaunched === true) {
  //   return <HomeScreen />;
  // } else {
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
