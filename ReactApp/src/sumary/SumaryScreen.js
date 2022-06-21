import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
//# indicator 
import IndicatorScreen from './../screens/util/IndicatorScreen';


//# redux
import dataSlice from '../redux/data.slice';
import { dataSelector } from '../redux/selector';
import { useDispatch, useSelector } from 'react-redux';

//# import get functions
import {getCourses, getData, getLearnedLesson, getTimeout} from './../screens/authen/SignInScreen'
//# axios
import config from '../config'
import axios from 'axios';
import { Constants } from '../Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userSlice from '../redux/user.slice';

const window = Dimensions.get('window');

async function postLearnedwords(lessonId) {
  const url = `${Constants.URL_SERVER}/learnedwords`;
  const jwt = await AsyncStorage.getItem('acc_token');
  const data = {
    lessonId: lessonId,
  };
  let config = {
    headers: {
      Authorization: "Bearer " + jwt,
    }
  };
  return (await axios({
    url, 
    method: 'post',
    data,
    ...config
  })).data;
}
export default function SumaryScreen(props) {
  const [loadingState, useLoadingState] = useState(false);
  const dispatch = useDispatch();

  //# get all infor from redux
  const lessonId = useSelector(dataSelector).lessonId;

  const backToOverview = async () => {
    useLoadingState(true);

    //# create learnedwords API & get all info
    const result = await postLearnedwords(lessonId);
    
    let timeout = await getTimeout();
    let data =  await getData();
    let learnedLesson = await getLearnedLesson();
    //# reset infor in redux
    dispatch(userSlice.actions.setTimeout(timeout));
    dispatch(userSlice.actions.setDataReview(data));
    dispatch(userSlice.actions.setLearnedLesson(learnedLesson));
    
    //# navigation
    props.navigation.navigate('Home');
    useLoadingState(false);
  }
  return (
    ( loadingState ) ? ( 
      <IndicatorScreen/>
    )
    : (
    <SafeAreaView style={styles.container}>
      <View style={styles.textView}>
        <Text style={{ fontSize: 30 }}>Welldone my friend.</Text>
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.signinButton}
          onPress={backToOverview}
        >
          <Text
            style={{
              fontSize: 30,
              padding: 10,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Let's get back.
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },  
  textView: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  viewButton: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  signinButton: {
    borderWidth: 1,
    width: window.width * 0.9,
    height: window.height * 0.1,
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: config.primary,

  },
})