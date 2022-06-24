import { Alert, Dimensions, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
//# config
import config from '../../config'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import dataSlice from '../../redux/data.slice';
import { indexWordSelector, wordsSelector } from '../../redux/selector';

const window = Dimensions.get('window');

function Answer(props) {
  const handleClick = () => {
    console.log(props.answer.word, props.word.word );
    if(props.answer.word == props.word.word) {
      Alert.alert('Exactly');
    }
  };
  return (
    <TouchableOpacity 
      style={styles.buttonMultipleChoice} 
      onPress={() => {
        handleClick();
        // console.log(props.answer);
      }}
    >
      <Text style={{fontSize: 20,}}>{props.answer.word_meaning}</Text> 
    </TouchableOpacity>
  )
}

export default function BlockMultiple() {
  //# data for answers
  // const answers = [
  //   {id: 1, word: 'learn', choice: 'Study or something likes that.'},
  //   {id: 2, word: 'student', choice: 'HA'},
  //   {id: 3, word: 'school', choice: 'hb'},
  //   {id: 4, word: 'lion', choice: 'hc'},
  // ];
  
  //# exact word
  const words = useSelector(wordsSelector);
  const indexWord = useSelector(indexWordSelector);
  // console.log(words, indexWord);
  const word = words[indexWord];
  console.log(word);

  //# answer
  const answers = [ word, words[indexWord+1], words[indexWord+2], words[indexWord+3]];

  //# useState
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Choose the meaning of this word.</Text>

      <View style={styles.wordHeader}>
        <Text style={{fontSize: 30,}}> lesson </Text>
        <Text style={{fontSize: 30,}}>/ ˈles.ən /</Text>
      </View>

      <View style={styles.multipleChoice}>
        <Answer answer={answers[0]} word={word}/>
        <Answer answer={answers[1]} word={word}/>
        <Answer answer={answers[2]} word={word}/>
        <Answer answer={answers[3]} word={word}/>
      </View>

    {/* <View >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}  
      >
        <View style={styles.centeredView}>
          <Text>{word.word}</Text>
          <Text>{word.meaning}</Text>
        </View>
      </Modal>
    </View> */}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 0.5,
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
    // borderWidth: 2,
    borderRadius: 20,
    marginRight: window.width/20,
    marginLeft: window.width/20,
    marginTop: 30,
    // justifyContent:'center',
    alignItems: 'center',
  },
  buttonMultipleChoice: {
    borderColor: config.blockImage,
    borderWidth: 3,
    width: window.width/20*18,
    height: window.height/20*2.2,
    marginTop: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: window.width/20*18,
    height: window.height/20,
    borderColor: 'red',
    borderWidth: 2,
  },
})