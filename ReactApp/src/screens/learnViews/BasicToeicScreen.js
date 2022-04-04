import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
// block for basic toeic
import BlockBasicToeic from "../util/BlockBasicToeic";

const data = [
  {
    id: 1,
    content: "School",
  },
  {
    id: 2,
    content: "Student",
  },
  {
    id: 3,
    content: "Class",
  },
  {
    id: 4,
    content: "Class",
  },
  {
    id: 5,
    content: "Class",
  },
  {
    id: 6,
    content: "Class",
  },
];

export default function BasicToeicScreen({ route }) {
  const renderItem = ({ item }) => (
    <BlockBasicToeic
      id={item.id}
      content={item.content}
      // navigation={navigation}
    />
  );

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
