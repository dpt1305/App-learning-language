import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  Button,
} from "react-native";
import React, { useState } from 'react'
import config from '../../config';
import { Formik } from "formik";
const window = Dimensions.get("window");



export default function SignUpScreen() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  function checkInfor(email, password, confirmPassword) {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Please fill all information.");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcome}>
        <Text style={{ fontSize: 30 }}>Register your account</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          editable={true}
          maxLength={40}
          // enablesReturnKeyAutomatically={true}
          keyboardType="default"
          placeholder="Email"
          onChangeText={(newText) => setEmail(newText)}
          style={styles.input}
          value={email}
        />
        <TextInput
          style={styles.input}
          editable={true}
          maxLength={40}
          // autoFocus={true}
          // enablesReturnKeyAutomatically={true}
          keyboardType="default"
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          editable={true}
          maxLength={40}
          // enablesReturnKeyAutomatically={true}
          keyboardType="default"
          placeholder="Confirm password"
        />
        {/* <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={{borderWidth: 1,}}>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <TextInput
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
              />
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik> */}
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => checkInfor(email, password, confirmPassword)}
        >
          <Text
            style={{
              fontSize: 25,
              padding: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>

      {/* <Button
        title="click me"
        onPress={() => props.navigation.navigate("SignUp")}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    // fontSize: 25,
  },
  inputView: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: window.height * 0.01,
    padding: 10,
    borderRadius: 20,
    width: window.width * 0.9,
    fontSize: 25,
    borderWidth: 1,
  },
  viewButton: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpButton: {
    borderWidth: 1,
    width: window.width * 0.9,
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: config.primary,
  },
});