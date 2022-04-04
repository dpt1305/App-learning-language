import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

import FlipCard from "react-native-flip-card";

export default function BlockSchool() {
  return (
    <SafeAreaView>
      <FlipCard>
        {/* Face Side */}
        <View style={styles.face}>
          <Text>The Face</Text>
        </View>
        {/* Back Side */}
        <View style={styles.back}>
          <Text>The Back</Text>
        </View>
      </FlipCard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})