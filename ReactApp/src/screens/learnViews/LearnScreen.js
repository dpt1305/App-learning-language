import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import React from "react";

import  BlockLearn  from "../util/BlockLearn";

const data = [
  {
    id: 1,
    title: "Basic Toeic",
    content: "1000 regular words",
  },
  {
    id: 2,
    title: "Ielts",
    content: "500 regular words",
  },
  {
    id: 3,
    title: "byhg hjg",
    content: "500 regular words",
  },
  {
    id: 4,
    title: "Ielts",
    content: "500 regular words",
  },
  {
    id: 5,
    title: "Ielts",
    content: "500 regular words",
  },
  {
    id: 6,
    title: "Ielts",
    content: "500 regular words",
  },
  {
    id: 7,
    title: "Ielts",
    content: "500 regular words",
  },
];



export default function LearnScreen({navigation}) {
  const renderItem = ({item})=> <BlockLearn title={item.title} content={item.content} navigation={navigation}/>
  return (
    <SafeAreaView style={styles.container} >
      <FlatList
        style={styles.flatList}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // horizontal={true}
        vertical={true}
        contentContainerStyle={{
          flex: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatList:{
    margin: "auto"
  }
});
