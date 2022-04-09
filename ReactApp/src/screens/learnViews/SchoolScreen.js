import {
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React from "react";

import BlockSchool from "../util/BlockSchool";
import BasicToeic from "../learnViews/BasicToeicScreen";

export default function SchoolScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container} nagation={{navigation}}>
      <Text>abiasfh</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text>Go Back</Text>
      </TouchableOpacity>
      <BlockSchool />
      <View style={styles.buttonNextView}>
        <TouchableOpacity style={styles.buttonNext}>
          <Text style={{ fontSize: 34, padding: 20 }}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },
  buttonNextView: {
    marginBottom: 10,
    marginTop: 630,
    // backgroundColor: "red",
    alignItems: "center",
  },
  buttonNext: {
    width: 340,
    backgroundColor: "red",
    borderRadius: 20,
    alignItems: "center",
  },
});
