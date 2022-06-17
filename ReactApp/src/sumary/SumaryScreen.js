import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import config from '../config'
const window = Dimensions.get('window');

export default function SumaryScreen(props) {
  const backToOverview = async () => {
    props.navigation.navigate('Home');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textView}>
        <Text style={{ fontSize: 30 }}>You have done this lesson.</Text>
        <Text style={{ fontSize: 30 }}>This is so awesome.</Text>
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.signinButton}
          onPress={backToOverview}
        >
          <Text
            style={{
              fontSize: 30,
              padding: 10,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Back to Overview
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },  
  textView: {
    flex: 7,
    justifyContent: 'center',
  },  
  viewButton: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  signinButton: {
    borderWidth: 1,
    width: window.width * 0.9,
    height: window.height * 0.1,
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: config.primary,

  },
})