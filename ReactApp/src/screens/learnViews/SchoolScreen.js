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

export default function SchoolScreen({navigation}) {
  const [isFlipped, setIsFlipped] = useState(false);
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
      <BlockSchool setIsFlipped={setIsFlipped}/>
      <TouchableOpacity
        onPress = {()=>{
          setIsFlipped( true );
        }}
      >
        <Text> Click here for changing.</Text>
      </TouchableOpacity>
      <View style={styles.buttonNextView}>
        <TouchableOpacity style={isFlipped ? styles.buttonNext : styles.buttonNextDisable}>
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
