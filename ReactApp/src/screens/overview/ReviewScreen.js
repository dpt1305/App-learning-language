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

const window = Dimensions.get('window');

export default function ReviewScreen(props) {
  const answers = [
    {id: 1, choice: 'ha'},
    {id: 2, choice: 'hi'},
    {id: 3, choice: 'hb'},
    {id: 4, choice: 'hc'},
  ];
  const renderItem =({item}) => <Text>{item.choice}</Text> 
  return (
    <SafeAreaView style={styles.container}>
      <BlockTopBar style={styles.topBar} navigation={props.navigation} />

      <Text style={styles.title}>Choose the meaning of this word.</Text>

      <View style={styles.wordHeader}>
        <Text style={{fontSize: 30,}}> lesson </Text>
        <Text style={{fontSize: 30,}}>/ ˈles.ən /</Text>
      </View>

      <View style={styles.multipleChoice}>
        <FlatList
          data={answers}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          vertical={false}
          contentContainerStyle={{
            flex: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </View>

      <View style={styles.buttonNextView}>
          <TouchableOpacity
            // style={disableButton ? styles.buttonNextDisable : styles.buttonNext}
            // disabled={disableButton}
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
  title: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  wordHeader: {
    flex: 1,
    borderColor: config.primary,
    borderWidth: 2,
    borderRadius: 20,
    marginRight: window.width/20,
    marginLeft: window.width/20,
    justifyContent:'center',
    alignItems: 'center',
  },
  multipleChoice: {
    flex: 5,
    borderColor: config.primary,
    borderWidth: 2,
    borderRadius: 20,
    marginRight: window.width/20,
    marginLeft: window.width/20,
    justifyContent:'center',
    alignItems: 'center',
  },
  buttonNextView: {
    flex: 1,
  },

})