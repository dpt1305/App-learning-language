import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from 'react'
// icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function BlockTopBar({ navigation }) {
  const createBackButtonAlert = () =>
    Alert.alert("Are you sure?", "If you quit, the process will be deleted.", [
      {
        text: "Cancel",
        // onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.navigate("Home") },
  ]);
  return (
    <View style={styles.topBar}>
      <TouchableOpacity
        onPress={createBackButtonAlert}
        style={{
          borderRadius: 20,
          maxWidth: 50,
          padding: 5,
          flex: 1,
        }}
      >
        <MaterialCommunityIcons
          name="exit-to-app"
          style={{
            fontSize: 40,
            transform: [{ rotate: "180deg" }],
          }}
        />
      </TouchableOpacity>
      <Text style={styles.process}>1/10</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  process: {
    flex: 2,
    fontSize: 40,
    textAlign: "center",
    marginRight: 20,
  },
  topBar: {
    flexDirection: "row",
    // flex: 1,
  },
});