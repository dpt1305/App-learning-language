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

export default function CombinedScreen({ navigation }) {
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(true);
  const [typeWord, setTypeWord] = useState({ textInput: ""});

  return (
    <SafeAreaView style={styles.container}>
      <BlockTopBar style={styles.topBar} navigation={navigation} />

      <View style={styles.viewBlock}>
        <RenderBlock
          setDisableButton={setDisableButton}
          state={count}
          word={newWord}
          setTypeWord={setTypeWord}
        />
      </View>

      <View style={styles.buttonNextView}>
        <TouchableOpacity
          style={disableButton ? styles.buttonNextDisable : styles.buttonNext}
          disabled={disableButton}
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
              setCount(count + 1);
              setDisableButton(true);
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
