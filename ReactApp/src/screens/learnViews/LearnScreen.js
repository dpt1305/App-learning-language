// import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
// import React, { Component } from 'react'

// export default class LearnScreen extends Component {
//   render() {
//     return (
//       <SafeAreaView>
//         <Text>LearnScreen</Text>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({})
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import React from "react";

import  BlockLearnScreen  from "./BlockLearnScreen";

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
    title: "Ielts",
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



export default function LearnScreen() {
  const renderItem = ({item})=> <BlockLearnScreen title={item.title} content={item.content} />
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={data}
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
