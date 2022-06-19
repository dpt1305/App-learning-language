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

function RenderBlock() {
  return <BlockMultiple/>
}

export default function ReviewScreen(props) {
  //# get data from redux
  const buttonState = useSelector(buttonStateSelector);

  return (
    <SafeAreaView style={styles.container}>
      <BlockTopBar style={styles.topBar} navigation={props.navigation} />

      <View style={styles.viewBlock}>
        <RenderBlock/>

      </View>

      <View style={styles.buttonNextView}>
          <TouchableOpacity
            style={buttonState ? styles.buttonNext : styles.buttonNextDisable}
            // style={disableButton ? styles.buttonNextDisable : styles.buttonNext}
            disabled={!buttonState}
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