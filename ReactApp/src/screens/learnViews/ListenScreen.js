import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import BlockListen from '../util/BlockListen';
import React, { useState, useEffect } from "react";
import config from "../../config";
// icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//audio 
import { Audio } from "expo-av";
import { useSelector } from "react-redux";
import { indexWordSelector, wordsSelector } from "../../redux/selector";
async function  playAudio() {
  const { sound } = await Audio.Sound.createAsync(
       require('../../audio/take_us_1.mp3')
  );
  console.log('Playing');
  await sound.playAsync(); 
}

export default function ListenScreen({ navigation }) {
  const [isFullFilled, setIsFullFilled] = useState(false);
  // console.log(setIsFullFilled);
  // const [isListened, setIsListened] = useState(false);
  const indexWord = useSelector(indexWordSelector);
  const words = useSelector(wordsSelector);
  

  const createBackButtonAlert = () => {
    Alert.alert("Are you sure?", "If you quit, the process will be deleted.", [
      {
        text: "Cancel",
        // onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.navigate("Home") },
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={{ flex: 1 }}>
          <MaterialCommunityIcons
            name="exit-to-app"
            style={{
              fontSize: 40,
              transform: [{ rotate: "180deg" }],
            }}
            onPress={createBackButtonAlert}
          />
        </TouchableOpacity>
        <Text
          style={{ fontSize: 34, marginLeft: 20, flex: 9, textAlign: "center" }}
        >
          1/10
        </Text>
      </View>

      <Text style={styles.title}>Pronounce correctly</Text>

      <View style={styles.pronounce}>
        <Text style={{ fontSize: 25 }}>commercial{"\n"}/ kem ‘mer s3l / </Text>
        <TouchableOpacity onPress={playAudio} style={styles.button}>
          <MaterialCommunityIcons name="volume-high" style={styles.speaker} />
        </TouchableOpacity>
      </View>

      <View style={styles.listenButton}>
        <BlockListen setIsFullFilled={setIsFullFilled} />
      </View>

      <View style={styles.buttonNextView}>
        <TouchableOpacity
          style={isFullFilled ? styles.buttonNext : styles.buttonNextDisable}
          onPress={() => navigation.navigate("Type")}
          disabled={!isFullFilled}
        >
          <Text style={{ fontSize: 34, padding: 20 }}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 25,
    textAlign: "center",
  },
  pronounce: {
    flex: 2,
    fontSize: 30,
    flexDirection: "row",
    justifyContent: 'center',
  },
  listenButton: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    flexDirection: "row",
    flex: 1,
  },
  speaker: {
    fontSize: 50,
    height: "auto",
    borderColor: "black",
    borderRadius: 25,
    borderWidth: 1,
  },
  button: {
    width: 50,
    marginLeft: 10,
  },
  buttonNextView: {
    flex: 1.3,
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
});
