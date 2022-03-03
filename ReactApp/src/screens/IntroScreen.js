import React, { Component } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  SectionList,
  Button,
} from "react-native";
import color from "../config";
// import {Swiper} from "react-native-swiper";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const { width, height } = Dimensions.get("window");
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
];
function getLastPage() {
  console.log("This is the last page.");
}

export default class IntroScreen extends Component {
  render(navigation) {
    // SwiperFlatList.goToLastIndex();
    return (
      <SwiperFlatList
        index={0}
        showPagination
        paginationDefaultColor="#CACACA"
        paginationActiveColor="#50C2C9"
        paginationStyle={styles.pagination}
        // displayGesture="true"
        // scrollToIndex={({ index }) => {
        //   console.log(index);
        // }}
        // goToLastIndex={() => navigation.navigate("HomeScreen")}
        // scrollToIndex={({ 1, true
        // })}
      >
        <View style={styles.container}>
          <Image
            source={slides[0].image}
            style={styles.image}
            // style={{ height: "75%", width, resizeMode: "contain" }}
          />
          <View style={styles.container}>
            <Text style={styles.title}>{slides[0].title}</Text>
            <Text style={styles.subtitle}>{slides[0].subtitle}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Image
            source={slides[1].image}
            style={styles.image}
            // style={{ height: "75%", width, resizeMode: "contain" }}
          />
          <View>
            <Text style={styles.title}>{slides[1].title}</Text>
            <Text style={styles.subtitle}>{slides[1].subtitle}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Image
            source={slides[2].image}
            style={styles.image}
            // style={{ height: "75%", width, resizeMode: "contain" }}
          />
          <View>
            <Text style={styles.title}>{slides[2].title}</Text>
            <Text style={styles.subtitle}>{slides[2].subtitle}</Text>
          </View>
        </View>
      </SwiperFlatList>
    );
  }
}
// <Swiper showsButton={true}>
//   <View /*>style={{ alignItems: "center" }}*/>
//     <Image
//       source={slides[0].image}
//       style={styles.image}
//       // style={{ height: "75%", width, resizeMode: "contain" }}
//     />
//     <View>
//       <Text style={styles.title}>{slides[0].title}</Text>
//       <Text style={styles.subtitle}>{slides[0].subtitle}</Text>
//     </View>
//   </View>

//   <View>
//     <Text>Beautiful</Text>
//   </View>
//   <View>
//     <Text>ABC</Text>
//   </View>
// </Swiper>
//   );
// }
// };
// const styles = StyleSheet.create({
//   subtitle: {
//     // color: COLORS.white,
//     fontSize: 13,
//     marginTop: 10,
//     maxWidth: "70%",
//     textAlign: "center",
//     lineHeight: 23,
//   },
//   title: {
//     // color: COLORS.white,
//     fontSize: 22,
//     fontWeight: "bold",
//     // marginTop: ,
//     textAlign: "center",
//   },
//   image: {
//     height: "80%",
//     width:"90%",
//     resizeMode: "contain",
//     paddingTop: "30%",
//   },
//   indicator: {
//     height: 2.5,
//     width: 10,
//     backgroundColor: "grey",
//     marginHorizontal: 3,
//     borderRadius: 2,
//   },
//   btn: {
//     flex: 1,
//     height: 50,
//     borderRadius: 5,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
const styles = StyleSheet.create({
  image: {
    width,
    height: "40%",
    resizeMode: "contain",
    // backgroundColor: "red",
    padding: 0,
    marginTop: 90,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  pagination: {
    marginBottom: 150,
  },
});
