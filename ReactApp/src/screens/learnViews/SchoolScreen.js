import {
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import config from '../../config';
import BlockSchool from "../util/BlockSchool";
import BasicToeic from "../learnViews/BasicToeicScreen";
// icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function SchoolScreen({navigation}) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <SafeAreaView style={styles.container} nagation={{ navigation }}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            // borderWidth: 1,
            borderRadius: 20,
            maxWidth: 50,
            padding: 5,
          }}
        >
          <MaterialCommunityIcons
            name="exit-to-app"
            style={{
              fontSize: 40,
              // width: 60,
              transform: [{ rotate: "180deg" }],
            }}
            // color={color}
            // size={size}
          />
        </TouchableOpacity>
      </View>

      <BlockSchool setIsFlipped={setIsFlipped} />

      <View style={styles.buttonNextView}>
        <TouchableOpacity
          style={isFlipped ? styles.buttonNext : styles.buttonNextDisable}
        >
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
  buttonNextDisable: {
    width: 340,
    backgroundColor: config.disable,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: config.backgroundColor,
  },
  buttonNext: {
    width: 340,
    backgroundColor: config.primary,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
  },
});
