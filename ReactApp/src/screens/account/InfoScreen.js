import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import userSlice from "../../redux/user.slice";
import AsyncStorage from '@react-native-async-storage/async-storage';

const user = {
  email: "tungplatin@gmail.com",
  name: "Tùng Đỗ Phú",
  given_name: "Tùng",
  family_name: "Đỗ Phú",
  picture:
    "https://lh3.googleusercontent.com/a/AATXAJwvRhdjTnbHtIOI30BhsWg7kvL5tDMZmJBF5zWl=s96-c",
};

export default function InfoScreen() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.block}>
        <Image
          style={styles.image}
          source={{
            uri: user.picture,
          }}
        />
        <Text style={{ fontSize: 24 }}>
          {user.family_name} {user.given_name}
        </Text>
        <Text>Email: {user.email}</Text>
      </View>

      {/* <View style={styles.block}>
        <View style={{ flexDirection: "row", alignContent: "space-between" }}>
          <Text style={{ fontSize: 24 }}>Music</Text>
          <Switch
            size="12"
            trackColor={{ false: "#767577", true: "#50C2C9" }}
            thumbColor={isEnabled ? "#5CFC89" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View> */}

      <TouchableOpacity 
        onPress={async ()=> {
            await AsyncStorage.setItem('acc_token', "");
            dispatch(userSlice.actions.changeLoginState())
          } 
        } 
        style={styles.logoutButton}
      >
        <Text
          style={{
            fontSize: 18,
            color: "black",
            fontWeight: "bold",
            alignSelf: "center",
            textTransform: "uppercase",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  block: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 10,
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    padding: 2,
    backgroundColor: "red",
  },
  logoutButton: {
    backgroundColor: "#E0DEDE",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:  300,
    marginBottom: 0,

  }
});
