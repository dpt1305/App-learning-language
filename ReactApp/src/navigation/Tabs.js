import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
// screen
import OverviewScreen from "../screens/OverviewScreen";
import LearnScreen from "../screens/learnViews/LearnScreen";
import LoginScreen from "../screens/LoginScreen";
import InfoScreen from "../screens/account/InfoScreen";
// total screen
import TotalLearnScreen from '../screens/learnViews/TotalLearnScreen';
// icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Overview"
      backBehavior="order"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Overview"
        component={OverviewScreen}
        options={{
          tabBarLabel: "Overview",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Learn"
        component={TotalLearnScreen}
        options={{
          tabBarLabel: "Lesson",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={InfoScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
