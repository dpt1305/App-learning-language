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
import { useSelector } from "react-redux";
import { coursesSelector } from "../../redux/selector";

export default function LearnScreen({navigation}) {
  const courses = useSelector(coursesSelector);
  const renderItem = ({item})=> <BlockLearn id={item.id} title={item.title} content={item.description} navigation={navigation}/>
  return (
    <SafeAreaView style={styles.container} >
      <FlatList
        style={styles.flatList}
        data={courses}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => {return item.id;}}
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
