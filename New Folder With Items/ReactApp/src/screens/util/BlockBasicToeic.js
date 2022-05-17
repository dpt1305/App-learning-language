import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import React from "react";
import config from "../../config";
//screen
import SchoolScreen from '../learnViews/SchoolScreen';
import CombinedScreen from '../learnViews/CombinedScreen';
// icon
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function BlockBasicToeic({id, content, navigation, done}) {
  let tick = done ? <MaterialCommunityIcons
            name="check"
            style={{
              fontSize: 30,
            }}
          /> : " ";
  let style = !done ? styles.container : styles.containerDisable;
  return (
    <TouchableOpacity
      style={style}
      disabled={done}
      onPress={() => navigation.navigate("Combined")}
    >
      <ImageBackground
        source={require("../../images/icons8-swastika-55.png")}
        style={styles.image}
      >
        <Text style={{ fontSize: 30 }}>{id}</Text>
      </ImageBackground>
      <Text style={styles.text}>{content}{tick}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 15,
    width: 350,
    height: 90,
    borderRadius: 10,
    backgroundColor: config.disable,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 3, //IOS
    flexDirection: "row",
    alignItems: "center",
  },
  containerDisable: {
    marginTop: 15,
    marginBottom: 15,
    width: 350,
    height: 90,
    borderRadius: 10,
    backgroundColor: config.blockImage,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 3, //IOS
    flexDirection: "row",
    alignItems: "center",

  },
  image: {
    width: 50,
    height: 50,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    margin: "auto",
  },
});
