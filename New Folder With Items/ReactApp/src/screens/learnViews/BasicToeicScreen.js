import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
// block for basic toeic
import BlockBasicToeic from "../util/BlockBasicToeic";
import SchoolScreen from './SchoolScreen';

const data = [
  {
    id: 1,
    content: "School",
    done: true,
  },
  {
    id: 2,
    content: "Student",
    done: true,
  },
  {
    id: 3,
    content: "Furniture",
    done: false,
  },
  {
    id: 4,
    content: "Car",
    done: false,
  },
  {
    id: 5,
    content: "Sport",
    done: false,
  },
  {
    id: 6,
    content: "Class",
    done: false,
  },
];

export default function BasicToeicScreen({ route, navigation }) {
  const renderItem = ({ item }) => {
    return (
    <BlockBasicToeic
      id={item.id}
      content={item.content}
      navigation={navigation}
      done = {item.done}
      // navigation={navigation}
    />
  )};

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        renderItem={renderItem}
        data={data}
        vertical={true}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          flex: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
