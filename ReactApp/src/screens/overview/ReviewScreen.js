import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
// import Block
import BlockSchool from "../util/BlockSchool";
import BlockListen from "../util/BlockListen";
import BlockType from "../util/BlockType";
import BlockTopBar from "../util/BlockTopBar";
import SumaryScreen from "./../../sumary/SumaryScreen"
//import config
import config from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { buttonStateSelector, countSelector, indexWord, indexWordSelector, loadingStateSelector, wordsSelector } from "../../redux/selector";
import dataSlice from "../../redux/data.slice";
// indicator
import {MaterialIndicator} from "react-native-indicators";
//# check box
import CheckBox from 'react-native-check-box';
import BlockMultiple from '../util/BlockMultiple';

const window = Dimensions.get('window');

export default function ReviewScreen(props) {
  const [disableButton, setDisableButton] = useState(true);
  const [typeWord, setTypeWord] = useState({ textInput: ""});

  //# get data from redux
  const dispatch = useDispatch();
  const buttonState = useSelector(buttonStateSelector);
  const words = useSelector(wordsSelector);
  const indexWord = useSelector(indexWordSelector);
  const count1 = useSelector(countSelector);

  function RenderBlock(props) {
    const random = Math.floor(Math.random() * 1);
    // const random = 1;

    // useEffect(async() => {
    //   await dispatch(dataSlice.actions.setCount(random));
    // }, []);

    if(random == 0) {
      return <BlockMultiple
      setDisableButton={props.setDisableButton}
      />;
    }
    // if(random == 1) {
    //   // dispatch(dataSlice.actions.setCount(1));
    //   return <BlockType
    //     setDisableButton={props.setDisableButton}
    //     setTypeWord={props.setTypeWord}
    //   />;
    // }
    // dispatch(dataSlice.actions.setCount(2));
    return <BlockListen
      setDisableButton={props.setDisableButton}
      />;
  }
  async function handleNextButton() {
    if(count1%3 == 1 && typeWord.textInput == words[indexWord].word){
      Alert.alert(
        "Correct",
        `${words[indexWord].word}: ${words[indexWord].meaning}`,
        
          { text: "OK", onPress: () =>{
            // setCount(count1 + 1);
            dispatch(dataSlice.actions.addCount());

            setDisableButton(true);
          } },
      );
    }
    if(count1%3 == 1 && typeWord.textInput != words[indexWord].word) {
      Alert.alert("Incorrect", `${words[indexWord].word}: ${words[indexWord].meaning}`, [
        {
          text: "OK",
          onPress: () => {

            setDisableButton(true);
          },
        },
      ]);
    }
    else {
      // setCount(count1+1);
      // await dispatch(dataSlice.actions.addCount());
      setDisableButton(true);
      if((count1)%3 == 2 && (count1) !=0) {
        dispatch(dataSlice.actions.addIndexWord())
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <BlockTopBar style={styles.topBar} navigation={props.navigation} />

      <View style={styles.viewBlock}>
        <RenderBlock 
          setDisableButton={setDisableButton}
          setTypeWord={setTypeWord}
        />

      </View>

      <View style={styles.buttonNextView}>
        <TouchableOpacity
          style={!disableButton ? styles.buttonNext : styles.buttonNextDisable}
          // style={disableButton ? styles.buttonNextDisable : styles.buttonNext}
          disabled={disableButton}
          onPress={() => handleNextButton()}
        >
          <Text style={{ fontSize: 34, padding: 20 }}>Next</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flex: 2,
  },
  viewBlock: {
    flex: 7
  },
  
  buttonNextView: {
    flex: 1,
    alignItems: 'center',
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
})