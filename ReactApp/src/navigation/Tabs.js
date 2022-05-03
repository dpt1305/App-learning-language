// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import config from '../config';
const Tab = createMaterialBottomTabNavigator();
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Button } from "react-native";
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
      shifting={true}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      // barStyle={{ paddingBottom: 10 }}
    >
      <Tab.Screen
        name="Overview"
        component={OverviewScreen}
        // tabBarColor={{'#3e2465'}}
        options={{
          tabBarLabel: "Overview",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
          tabBarColor: config.primary,
        }}
        title={{ size: 30 }}
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
              size={30}
            />
          ),
          tabBarColor: "lightpink",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={InfoScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={30}
              style={styles.icon}
            />
          ),
          tabBarColor: "orange",
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  icon: {
    color: '#3e2465',
    
  }
})