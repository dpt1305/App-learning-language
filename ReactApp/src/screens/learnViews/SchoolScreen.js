import {
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import BlockSchool from "../util/BlockSchool";

export default function SchoolScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>abiasfh</Text>
      <BlockSchool />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end'
  },
  buttonNext: {
    marginBottom: 10,
    marginTop: 650,
    backgroundColor: "red",
  },
});
