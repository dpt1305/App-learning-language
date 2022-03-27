import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import config from "../../config";

export default function BlockLearnScreen({ title, content }) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Basic Toeic</Text>
      </View>
      {/* <View style={styles.block}>
      <View/> */}
      <View style={styles.block}>
        <Image
          source={require("../../images/icons8-graduation-100.png")}
          style={styles.image}
        />
        <Text style={styles.text}>1000 words for reading</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 110,
    marginTop: 400,
    borderRadius: 10,
    marginLeft: 10,
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
