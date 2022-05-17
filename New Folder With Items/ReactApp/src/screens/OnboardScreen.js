import Onboarding from "react-native-onboarding-swiper";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
const portrait = height > width;

const slides = [
  {
    id: "1",
    image: require("../images/intro_1.png"),
    title: "Learning vocabulary",
    subtitle:
      "An app for learning vocabulary in English\nA learner’s app for learners.",
  },
  {
    id: "2",
    image: require("../images/intro_2.png"),
    title: "AI assistant",
    subtitle:
      "Using Artificial Intellegence technology \nto check your pronunciation",
  },
  {
    id: "3",
    image: require("../images/intro_3.png"),
    title: "Smart notification",
    subtitle: "Scientific learning with repetitaion method",
  },
  {
    id: "4",
    image: require("../images/intro_4.png"),
    title: "Welcome to my application",
    subtitle: "",
  },
];
const Done = ({ ...props }) => (
  // <Button
  //   title="Done"
  //   color="black"
  //   titleStyle={{
  //     color: "black",
  //     fontSize: 20,
  //   }}
  //   buttonStyle={{
  //     backgroundColor: "white",
  //     borderRadius: 60,
  //     flex: 1,
  //     height: 30,
  //     width: 30,
  //   }}
  //   {...props}
  // />
  <TouchableOpacity
    {...props}
    style={{
      width: 300,
      height: 60,
      backgroundColor: "#50C2C9",
      borderRadius: "50%",
      color: "white",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      marginBottom: 300,
      marginRight: 45,
    }}
  >
    <Text
      style={{
        fontSize: 40,
        fontWeight: "bold",
        // textTransform: "uppercase",
        // textAlign: "center",
        // alignItems: "center",
        color: "white",
        // marginRight: 20,
      }}
    >
      {" "}
      Let's start
    </Text>
  </TouchableOpacity>
);
const OnboardScreen = ({ navigation }) => {
  return (
    <Onboarding
      titleStyles={styles.title}
      imageContainerStyles={styles.image}
      containerStyle={styles.container}
      showSkip={false}
      showNext={false}
      DoneButtonComponent={Done}
      onDone={() => navigation.navigate("HomeScreen")}
      pages={[
        {
          title: slides[0].title,
          subtitle: slides[0].subtitle,
          image: (
            <Image style={{ resizeMode: "center" }} source={slides[0].image} />
          ),
          backgroundColor: "#fff",
        },
        {
          title: slides[1].title,
          subtitle: slides[1].subtitle,
          image: (
            <Image style={{ resizeMode: "center" }} source={slides[1].image} />
          ),
          backgroundColor: "#fff",
        },
        {
          title: slides[2].title,
          subtitle: slides[2].subtitle,
          image: (
            <Image style={{ resizeMode: "center" }} source={slides[2].image} />
          ),
          backgroundColor: "#fff",
        },
        {
          title: slides[3].title,
          subtitle: slides[3].subtitle,
          image: (
            <Image style={{ resizeMode: "center" }} source={slides[3].image} />
          ),
          backgroundColor: "#fff",

        },
      ]}
    />
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "yellow",
    justifyContent: portrait ? "center" : "flex-start",
    width,
    height: "50%",
    padding: 0,
    margin: 0,
  },
  image: {
    justifyContent: portrait ? "center" : "flex-start",
    padding: 0,
    margin: 0,
    width,
    height: "0%",
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    marginTop: 70,
  },
});
