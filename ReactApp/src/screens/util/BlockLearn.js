import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import config from "../../config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Constants } from "../../Constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import dataSlice from './../../redux/data.slice';

async function getLessons(id) {
  const url = `${Constants.URL_SERVER}/lessons/${id}`;
  const jwt = await  AsyncStorage.getItem('acc_token');
  let config = {
    headers: {
       Authorization: "Bearer " + jwt,
    }
  };
  return  (await axios.get(url, config)).data.data;
}

export default function BlockLearnScreen({ title, content, navigation, id }) {
  const dispatch = useDispatch();
  
  const handleBlockLearn = async () => {
    dispatch(dataSlice.actions.switchLoadingState())
    const lessons = await getLessons(id);
    if( lessons ) {
      dispatch(dataSlice.actions.addLessons(lessons));
      dispatch(dataSlice.actions.switchLoadingState())
      navigation.navigate("BasicToeic", {title});
    }
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={handleBlockLearn}
    >
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {/* <View style={styles.block}>
      <View/> */}
      <View style={styles.block}>
        <Image
          source={require("../../images/icons8-graduation-100.png")}
          style={styles.image}
        />
        <Text style={styles.text}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 90,
    borderRadius: 10,
    marginBottom: 60,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 3, width: 2 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  },
  titleText: {
    textAlign: "center",
    fontSize: 24,
    height: "100%",
    width: "100%",
  },
  title: {
    width: 350,
    height: 37,
    backgroundColor: config.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderRadius: 10,
  },
  block: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: config.disable,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    margin: 15,
  },
  text: {
    fontSize: 24,
  },
});
