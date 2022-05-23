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
import { Constants } from "../../Constants";
import axios from "axios";
//icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//audio 
import { Audio } from "expo-av";
// compare string
import * as stringSimilarity from "string-similarity";
import { useSelector } from "react-redux";
import { indexWordSelector, wordsSelector } from "../../redux/selector";


async function  playAudio(uri) {
  const { sound } = await Audio.Sound.createAsync({uri});
  console.log('Playing');
  await sound.playAsync(); 
}
export default function BlockListen(props) {
  const [recording, setRecording] = React.useState();
  const [uriRecording, setUriRecording] = React.useState(null);
  const [percent, setPercent] = React.useState(null);

  const indexWord = useSelector(indexWordSelector);
  const words = useSelector(wordsSelector);

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
    
    // const similarity = stringSimilarity.compareTwoStrings(result, props.word);
    // console.log(similarity);
    // await setPercent(similarity);
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
        "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
      },
    };
    const xhr = new XMLHttpRequest();
    xhr.open('POST', Constants.URL_VPS);
    //# success 
    xhr.onload = () => {
      const response = JSON.parse(xhr.response);
    
      const compare = stringSimilarity.compareTwoStrings(response.data, words[indexWord].word );
      setPercent(`${(compare*100).toFixed(2)}%`);
      if( compare >= 0.6) { props.setDisableButton(false)}

      return response;
      // ... do something with the successful response
    };
    //# error
    xhr.onerror = e => {
      console.log(e, 'upload failed');
    };
    //# send data 
    xhr.send(formData);
    
  }
  async function playBack() {
    await recording.createNewLoadedSoundAsync();
  }
  //# render screen
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pronounce correctly</Text>
      <View style={styles.pronounce}>
        <Text style={{ fontSize: 25 }}>{words[indexWord].word}{"\n"} {words[indexWord].pronunciation} </Text>
        <TouchableOpacity onPress={() => playAudio(words[indexWord].linkAudio)} style={styles.button}>
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