import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  MaterialIndicator,
} from "react-native-indicators";

export default function IndicatorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialIndicator color="#50C2C9"  trackWidth="5" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
