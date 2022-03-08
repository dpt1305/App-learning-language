import {
  Text,
  StyleSheet,
  Icon,
  View,
  SafeAreaView,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Expo } from "expo";
import React, { Component } from "react";
import * as Google from "expo-google-app-auth";
// import { FontAwesome } from "react-native-fontawesome";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import { LoginButton, AccessToken } from "react-native-fbsdk";
import * as Facebook from "expo-facebook";
export default class LoginScreen extends Component {
  fb_id: string = "1019808805410770";

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <TouchableOpacity >
        </TouchableOpacity> */}
        <FontAwesome.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={this.handleFacebookSignin}
        >
          Login with Facebook
        </FontAwesome.Button>
        <Text>LoginScreen</Text>
        <FontAwesome.Button
          name="google"
          onPress={this.handleGoogleSignin}
          // backgroundColor=
        >
          Sign in with Google
        </FontAwesome.Button>
        <Button
          onPress={this.handleGoogleSignin}
          title="Sign in with Google"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />
        <AntDesign name="googleplus" size={24} color="black" />
        {/* <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log("login has error: " + result.error);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then((data) => {
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log("logout.")}
        /> */}
      </SafeAreaView>
    );
  }
  async handleFacebookSignin() {
    try {
      await Facebook.initializeAsync("1019808805410770");
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile", "user_friends", "email"],
        });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        console.log(
          `${token}\n\n${expirationDate}\n${declinedPermissions}\n${permissions}\n`
        );
        alert( `Hi ${(await response.json()).name}!`);
      } else {
        alert("Cancel");
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  handleGoogleSignin() {
    const config = {
      iosClientId:
        "688596506075-magtkhkkr7c9ujkck3dt93srlcpk47pn.apps.googleusercontent.com",
      scopes: ["email", "profile"],
    };
    Google.logInAsync(config)
      .then((result) => {
        const { type, user, accessToken } = result;

        if (type == "success") {
          console.log(user);
          console.log(accessToken);
        } else {
          console.log("Fail");
        }
      })
      .catch((e) => console.log(e));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
