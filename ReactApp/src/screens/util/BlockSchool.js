import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React, { useState } from 'react'
import config from '../../config';
// flip card
import FlipCard from "react-native-flip-card";
// icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//audio 
import { Audio } from "expo-av";
import { useDispatch, useSelector } from "react-redux";
import { buttonStateSelector, indexWordSelector, wordsSelector } from "../../redux/selector";
import dataSlice from "../../redux/data.slice";
async function  playAudio(uri) {
  const { sound } = await Audio.Sound.createAsync({ uri });
  await sound.playAsync(); 
}


export default function BlockSchool(props) {
  const [ isFlipped, setIsFlipped ] = useState(false);
  const dispatch = useDispatch();
  
  const words = useSelector(wordsSelector);
  const indexWord = useSelector(indexWordSelector);
  const buttonState = useSelector(buttonStateSelector);
  // console.log(words[indexWord]);

  return (
    <SafeAreaView style={styles.container}>
      <FlipCard
        style={styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={() => {
          // if(isFlipped && buttonState==false) { dispatch(dataSlice.actions.switchButtonState(true))}
          if(!isFlipped) { setIsFlipped(true); }
          if(isFlipped) { props.setDisableButton(false)}
        }}
      >
        {/* Face Side */}
        <View style={styles.face}>
          {/* <Image />  */}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => playAudio(words[indexWord].linkAudio)} style={styles.button}>
              <MaterialCommunityIcons
                name="volume-high"
                style={styles.speaker}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.image}
            loadingIndicatorSource
            source={{
              uri: words[indexWord].linkImage,
            }}
          />
          <Text style={styles.meaning}>{words[indexWord].example}</Text>
        </View>

        {/* Back Side */}
        <View style={styles.back}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => playAudio(words[indexWord].linkAudio)} style={styles.button}>
              <MaterialCommunityIcons
                name="volume-high"
                style={styles.speaker}
              />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.word}>{words[indexWord].word}</Text>
          <Text style={styles.pronunciation}>{words[indexWord].pronunciation}</Text>

          <Text style={styles.meaning}>{words[indexWord].meaning}</Text>
        </View>
      </FlipCard>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  card: {
    alignItems: "center",
    // justifyContent: 'center',
    // width: 310,
    // height: 250,
    // backgroundColor: "red",
    marginTop: 20,
  },
  face: {
    width: 340,
    height: 550,
    backgroundColor: config.disable,
    // marginBottom: 60,
    borderRadius: 30,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 3, width: 2 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  },
  back: {
    width: 340,
    height: 550,
    backgroundColor: config.secondary,
    borderRadius: 30,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 3, width: 2 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
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
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    backgroundColor: "grey",
    borderRadius: 30,
  },
  meaning: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 23,
    marginTop: 10,
    maxWidth: 300,
    height: "auto",
    textAlign: "center",
  },
  pronunciation: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 23,
    marginTop: 10,
    width: 300,
    height: 250,
    textAlign: "center",
    // fontWeight: "bold",
  },
  buttonNext: {
    marginEnd: 20,
  },
  word: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 23,
    marginTop: 10,
    width: 300,
    textAlign: "center",
    fontWeight: "bold",
  },
});