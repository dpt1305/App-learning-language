import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
// block for basic toeic
import BlockBasicToeic from "../util/BlockBasicToeic";
import SchoolScreen from './SchoolScreen';
import { useSelector } from "react-redux";
import { lessonsSelector, loadingStateSelector } from "../../redux/selector";
import IndicatorScreen from "../util/IndicatorScreen";

export default function BasicToeicScreen({ route, navigation }) {
  const lessons = useSelector(lessonsSelector);
  const loadingState = useSelector(loadingStateSelector);

  const renderItem = ({ item }) => {
    return (
    <BlockBasicToeic
      id={lessons.indexOf(item)+1}
      content={item.lesson_title}
      navigation={navigation}
      done = {item.done}
      lessonId = {item.lesson_id}
      key={item.id}
      // navigation={navigation}
    />
  )};

  return (
    loadingState 
    ? <IndicatorScreen/> 
    : <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        renderItem={renderItem}
        data={lessons}
        vertical={true}
        keyExtractor={(item, index) => {return index}}
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
