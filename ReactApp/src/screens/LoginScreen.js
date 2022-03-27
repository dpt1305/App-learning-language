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
import { axios } from "axios";

// import * as Google from "expo-google-app-auth";
// import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-facebook";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

WebBrowser.maybeCompleteAuthSession();

export default class LoginScreen extends Component {
  // const [accessToken, setAccessToken] = React.useState();
  // const [userInfo, setUserInfo] = React.useState();
  // const [message, setMessage] = React.useState();
  disable: boolean = false;
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      setAccessToken: null,
      userInfo: null,
      setUserInfo: null,
      message: null,
      setMessage: null,
      // disable: false
    };
  }
  handleGoogleSignin() {
    this.disable = false;
    // const [request, response, promptAsync] = Google.useAuthRequest({
    //   expoClientId:
    //     "688596506075-60gooh1fd4vc9aemjnjsftcel1ldad65.apps.googleusercontent.com",
    // });

    // React.useEffect(() => {
    //   this.setMessage(JSON.stringify(response));
    //   if (response?.type === "success") {
    //     this.setAccessToken(response.authentication.accessToken);
    //     console.log(response);
    //   }
    // }, [response]);


  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>LoginScreen</Text>
        <FontAwesome.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={this.handleFacebookSignin}
        >
          Login with Facebook
        </FontAwesome.Button>
        <FontAwesome.Button
          name="google"
          onPress={this.handleGoogleSignin}
          disable={this.disable}
        >
          Sign in with Google
        </FontAwesome.Button>
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
        alert(`Hi ${(await response.json()).name}!`);
      } else {
        alert("Cancel");
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  //  handleGoogleSignin = async function() {
  //   const config = {
  //     iosClientId:
  //       "688596506075-60gooh1fd4vc9aemjnjsftcel1ldad65.apps.googleusercontent.com",
  //     scopes: ["email", "profile"],
  //   };

  //   Google.logInAsync(config)
  //     .then((result) => {
  //       const { type, user, accessToken } = result;

  //       if (type == "success") {
  //         // console.log(user);
  //         // console.log(result);
  //         console.log(result);
  //         // console.log(Object.keys(result));
  //         let idToken = result.idToken;

  //         fetch("http://localhost:3000/auth/google", {
  //           method: "POST",
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             idToken,
  //           }),
  //         });
  //         // .then(result => console.log(result));
  //         // .catch(err => console.log(err));
  //       } else {
  //         console.log("Fail");
  //       }
  //     })
  //     .catch((e) => console.log(e));
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
