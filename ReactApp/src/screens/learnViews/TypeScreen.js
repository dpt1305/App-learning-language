import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import config from "../../config";
// icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function TypeScreen({ navigation }) {
  const [isFullFilled, setIsFullFilled] = useState(false);
  const word = {
    word: 'take',
    length: 4,
  }
  const createBackButtonAlert = () =>
    Alert.alert("Are you sure?", "If you quit, the process will be deleted.", [
      {
        text: "Cancel",
        // onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.navigate("Home") },
    ]);

  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
  
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   // keyboardVerticalOffset='40'
    // >

    <SafeAreaView style={styles.container}>
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

      <Text style={styles.header}>Please fill in the word</Text>
      <Text style={styles.meaning}>
        This is the meaning of word. It may be so long, like this,
      </Text>
      {/* <ScrollView style={{flex: 5}}> */}
      <View style={styles.textInput}>
        <TextInput
          editable
          // maxLength={2}
          style={styles.input}
          isFocused="true"
          placeholder="_"
          keyboardType="default"
          // onSubmitEditing={Keyboard.dismiss}
          onPress={Keyboard.dismiss}
        />
      </View>
      {/* </ScrollView> */}

      <View style={styles.buttonNextView}>
        <TouchableOpacity
          style={isFullFilled ? styles.buttonNext : styles.buttonNextDisable}
          onPress={() => navigation.navigate("Type")}
          disabled={!isFullFilled}
        >
          <Text style={{ fontSize: 34, padding: 20 }}>Next</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // keyboardVerticalOffset="10"
      ></KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "flex-end",
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    flex: 1,
  },
  header: {
    flex: 0.6,
    fontSize: 25,
    textAlign: "center",
  },
  meaning: {
    flex: 2,
    fontSize: 30,
    textAlign: "center",
  },
  textInput: {
    flex: 5,
  },
  buttonNextView: {
    flex: 1.8,
    marginBottom: 10,
    // marginTop: 'auto',
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

  process: {
    flex: 2,
    fontSize: 40,
    textAlign: "center",
    marginRight: 20,
  },
  input: {
    borderWidth: 1,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 30,
  },
});
