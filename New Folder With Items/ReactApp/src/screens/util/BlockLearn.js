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
// import { useNavigation } from "@react-navigation/native";

export default function BlockLearnScreen({ title, content, navigation }) {
  // const navigation = useNavigation(); // navigation hook
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigation.navigate("BasicToeic", {title})}
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
