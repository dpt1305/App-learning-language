import {
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from "react-native";
import React, { useState } from "react";
import config from '../../config';
import BlockSchool from "../util/BlockSchool";

// icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function generateAlertBack(){

}

export default function SchoolScreen({navigation}) {
  const [isFlipped, setIsFlipped] = useState(false);

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
    <SafeAreaView style={styles.container} nagation={{ navigation }}>
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

      <BlockSchool setIsFlipped={setIsFlipped} />

      <View style={styles.buttonNextView}>
        <TouchableOpacity
          style={isFlipped ? styles.buttonNext : styles.buttonNextDisable}
          onPress={() => navigation.navigate("Listen")}
          disabled={!isFlipped}
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
  topBar: {
    flexDirection: "row",
  },
  process: { 
    flex: 2,
    fontSize: 40, 
    textAlign: 'center', 
    marginRight: 20,
  },
});
