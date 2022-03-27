import { StyleSheet, Text, Button, View, SafeAreaView } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

import  IndicatorScreen from "./util/IndicatorScreen";
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen1() {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "688596506075-pu6j85qea48djjj4sjd9k0ebt5k7h5t5.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });
  // React.useEffect(() => {
  //   setMessage(JSON.stringify(response));
  //   if (response?.type === "success") {
  //     setAccessToken(response.authentication.accessToken);
  //   }
  // }, [response]);
  // console.log(response);

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;

      getUserData(response.access_token);
      console.log(response);
    }
  }, [response]);

  // console.log(response.authentication);

  async function getUserData(accessToken) {
    // console.log(accessToken);
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
      // console.log(data);
    });
  }


  // const [discovery] = Google.refreshAsync({
  //   clientId: "688596506075-pu6j85qea48djjj4sjd9k0ebt5k7h5t5.apps.googleusercontent.com",
  //   clientSecret: "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",
  //   scopes: ['profile', 'email'],
  // });

  return (
    <SafeAreaView style={styles.container}>
      <Button disable={!request} title="login" onPress={() => promptAsync()} />
    </SafeAreaView>
  );

  handleGoogleSignin = function () {};
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
