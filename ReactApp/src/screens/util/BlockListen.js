import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as React from 'react';
import config from '../../config';
import FormData from 'form-data';
import * as FileSystem from "expo-file-system";
import axios from "axios";
//icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//audio 
import { Audio } from "expo-av";
async function  playAudio() {
  const { sound } = await Audio.Sound.createAsync(
       require('../../audio/take_us_1.mp3')
  );
  console.log('Playing');
  await sound.playAsync(); 
}
export default function BlockListen() {
  const [recording, setRecording] = React.useState();
  const [uriRecording, setUriRecording] = React.useState(null);
  const [percent, setPercent] = React.useState(null);

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      // console.log("thius is" + isFullFilled);
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        {
          isMeteringEnabled: true,
          android: {
            extension: ".m4a",
            outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
            audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
            sampleRate: 44100,
            numberOfChannels: 2,
            bitRate: 320000,
          },
          ios: {
            extension: ".wav",
            audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
            sampleRate: 44100,
            numberOfChannels: 2,
            bitRate: 320000,
            linearPCMBitDepth: 16,
            linearPCMIsBigEndian: false,
            linearPCMIsFloat: false,
          },
        }
        // Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);


      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    const source = "../../recordings";

    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync(source);
    const uri = recording.getURI();
    setUriRecording(uri);

    const result = await sendAudioToServer(uri);
    // console.log(result);
  }
  async function sendAudioToServer(uri) {
    const fileName = uri.split("/").pop();

    const formData = new FormData();
    formData.append("file", {
      name: fileName,
      type: "file",
      uri,
    });
    let options = {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };

    let response = fetch("http://104.194.240.80:3000/uploadfile", options)
      .then( res => console.log('111', res ));
    // console.log(response);
    return response;
  }
  async function playBack() {
    await recording.createNewLoadedSoundAsync();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pronounce correctly</Text>
      <View style={styles.pronounce}>
        <Text style={{ fontSize: 25 }}>commercial{"\n"}/ kem ‘mer s3l / </Text>
        <TouchableOpacity onPress={playAudio} style={styles.button}>
          <MaterialCommunityIcons name="volume-high" style={styles.speaker} />
        </TouchableOpacity>
      </View>

      <View style={styles.listenButton}>

        <TouchableOpacity
          onPress={recording ? stopRecording : startRecording}
          style={recording ? styles.disableListening : styles.listening}
        >
          <MaterialCommunityIcons name="microphone" size={125} />
        </TouchableOpacity>
        <Text
          style={styles.percent}
        >
          {percent}
        </Text>

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
    fontSize: 20,
    textAlign: "center",
  },
  pronounce: {
    flex: 2,
    fontSize: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  listenButton: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  speaker: {
    fontSize: 50,
    height: "auto",
    borderColor: "black",
    borderRadius: 25,
    borderWidth: 1,
  },
  disableListening: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: config.disable,
    shadowColor: "rgba(0,0,0, .6)", // IOS
    shadowOffset: { height: 3, width: 2 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
  },
  listening: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: config.primary,
    shadowColor: "rgba(0,0,0, .6)", // IOS
    shadowOffset: { height: 3, width: 2 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
  },
  percent: {
    fontSize: 35,
    textAlign: "center",
    marginTop: 10,
  },
});