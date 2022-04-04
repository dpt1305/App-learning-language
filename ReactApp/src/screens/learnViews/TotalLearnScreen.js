import { StyleSheet, Text, View } from "react-native";
import React from "react";

import LearnScreen from "./LearnScreen";
import BasicToeic from "./BasicToeicScreen";
import SchoolScreen from "./SchoolScreen";

import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

import config from "../../config";
export default function MyStack() {
  return (
    <Navigator>
      <Screen
        name="LearnView"
        component={LearnScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="BasicToeic"
        component={BasicToeic}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: config.secondary,
          },
        })}
      />
      <Screen name="School" component={SchoolScreen}  />
    </Navigator>
  );
}

const styles = StyleSheet.create({});
