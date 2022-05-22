import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState } from "react";
// import Block
import BlockSchool from "../util/BlockSchool";
import BlockListen from "../util/BlockListen";
import BlockType from "../util/BlockType";
import BlockTopBar from "../util/BlockTopBar";
//import config
import config from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { buttonStateSelector, countSelector, indexWord, indexWordSelector, wordsSelector } from "../../redux/selector";
import dataSlice from "../../redux/data.slice";

const newWord = {
  word: "student",
  meaning: "a person who is studying at a university or college",
  type: "noun",
  example: "a graduate student",
  pronunciation: "/ˈstuːdnt/",
  image: "",
  length: 7,
  placeholder: "s-----t",
};

function RenderBlock(props) {

  if (props.state % 3 == 0)
    return <BlockSchool setDisableButton={props.setDisableButton} word={props.word} />;
  if (props.state % 3 == 1)
    return (
      <BlockType
        setDisableButton={props.setDisableButton}
        word={props.word}
        setTypeWord={props.setTypeWord}
      />
    );
  else return <BlockListen word={props.word}/>;
}

export default function CombinedScreen(props) {
  const words =  props.route.params.words;
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(true);
  const [typeWord, setTypeWord] = useState({ textInput: ""});

  const dispatch = useDispatch();
  const buttonState= useSelector(buttonStateSelector);
  const count1 = useSelector(countSelector);
  const indexWord = useSelector(indexWordSelector);
  const words1 = useSelector(wordsSelector);
  console.log(words1[indexWord]);
  
  //# initial for start session learn
  dispatch(dataSlice.actions.resetCount());
  dispatch(dataSlice.actions.resetIndexWord());
  return (
    <SafeAreaView style={styles.container}>
      <BlockTopBar style={styles.topBar} navigation={props.navigation} />

      <View style={styles.viewBlock}>
        <RenderBlock
          setDisableButton={setDisableButton}
          state={count1}
          word={newWord}
          setTypeWord={setTypeWord}
        />
      </View>

      <View style={styles.buttonNextView}>
        <TouchableOpacity
          style={!buttonState ? styles.buttonNextDisable : styles.buttonNext}
          disabled={!buttonState}
          onPress={() => {
            if(count%3 == 1 && typeWord.textInput == newWord.word){
              Alert.alert(
                "Correct",
                `${newWord.word}: ${newWord.meaning}`,
                
                  { text: "OK", onPress: () =>{
                    setCount(count + 1);
                    setDisableButton(true);
                  } },
              );
            }
            if(count%3 == 1 && typeWord.textInput != newWord.word) {
              Alert.alert("Incorrect", `${newWord.word}: ${newWord.meaning}`, [
                {
                  text: "OK",
                  onPress: () => {

                    setDisableButton(true);
                  },
                },
              ]);
            }
            else {
              dispatch(dataSlice.actions.addCount());
              dispatch(dataSlice.actions.switchButtonState(false));

            }
          }}
        >
          <Text style={{ fontSize: 34, padding: 20 }}>Next</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // keyboardVerticalOffset="20"
        style={{ marginTop: 10 }}
      ></KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flex: 2,
  },
  viewBlock: {
    flex: 5,
  },
  buttonNextView: {
    flex: 0.8,
    alignItems: "center",
    marginTop: 10,
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
