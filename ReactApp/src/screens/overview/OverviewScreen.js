import { BarChart } from "react-native-chart-kit";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import CountDown from "react-native-countdown-component";
//redux 
import { useDispatch, useSelector } from "react-redux";
import { dataSelector, userRemaningSelector, wordsSelector } from "../../redux/selector";
import dataSlice from "../../redux/data.slice";
// config
import config from "../../config";
import IndicatorScreen from "../util/IndicatorScreen";
import { Constants } from "../../Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


export async function getWordForReview() {
  try {
    const url = `${Constants.URL_SERVER}/learnedwords/word-for-review`;
    const jwt = await AsyncStorage.getItem('acc_token');
    let config = {
      headers: {
         Authorization: "Bearer " + jwt,
      }
    };
    return (await axios.get(url, config)).data.data;
  } catch (error) {
    return {
      code: 400,
      message: 'Fail',
      data: "Error to sign in.",
    };
  }
}

export default function OverviewScreen(props) {
  //# use State
  const [loadingState, setLoadingState] = useState(false);
  const [countDone, setCountDone] = useState(false);
  const [time, setTime] = useState(0);
  const { width, height } = Dimensions.get("window");

  //# get time out
  const user = useSelector(userRemaningSelector);
  const dispatch = useDispatch();

  const handleTimeout = (date) => {
    if(date == null) {
      return null;
    }
    const newDate = new Date(date);
    const now = new Date();
    const second = Math.ceil((newDate-now)/1000);
    if(second > 0) {
      return second;
    } else {
      return 0;
    }
  };
  useEffect(() => {
    setTime(handleTimeout(user.timeout));
  },[])

  const data = {
    labels: ["0", "1", "2", "3", "4", "5"],
    datasets: [
      {
        data: user.dataReport,
      },
    ],
  };
  
  const data1 = useSelector(dataSelector);
  const user1 = useSelector(userRemaningSelector);

  //# function go to review screen
  const review = async () => {
    setLoadingState(true);

    const result = await getWordForReview();
    if(result.code == 400) {
      setLoadingState(false);
      return Alert.alert('Error');
    }
    
    await dispatch(dataSlice.actions.addWords(result));
    await dispatch(dataSlice.actions.resetIndexWord());
    props.navigation.navigate("Review");
    setLoadingState(false);

  }

  return (
    (loadingState) 
    ? (
      <IndicatorScreen/>
    ) 
    : (
      <SafeAreaView style={styles.container}>
      <View style={styles.chartView}>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            flex: 2,
            marginTop: 20,
          }}
        >
          Overview Dashboard
        </Text>
        <BarChart
          style={{
            borderColor: config.primary,
            borderWidth: 3,
            textAlign: "center",
            paddingRight: 10,
            borderRadius: 20,
            marginRight: 2,
            marginLeft: 1,
          }}
          data={data}
          width={width * 0.95}
          height={300}
          // yAxisLabel="$"
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: config.backgroundColor,
            backgroundGradientTo: "white",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(10, 0, 10, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(10, 0, 10, ${opacity})`,
            style: {
              // borderRadius: 16,
              flex: 5,
              fontSize: 30,
            },
            fillShadowGradientFromOpacity: 0.5,
          }}
          bezier
          // style={styles.chart}
          showValuesOnTopOfBars={true}
          withHorizontalLabels={false}
          withInnerLines={false}
          fromZero={true}
        />
      </View>

      <View style={styles.countdown}>
        <CountDown
          until={time}
          onFinish={() => setCountDone(true)}
          digitStyle={{
            backgroundColor: "#FFF",
            borderWidth: 4,
            borderColor: config.primary,
          }}
          digitTxtStyle={{ color: config.secondary }}
          timeLabelStyle={{ color: "red", fontWeight: "bold" }}
          separatorStyle={{ color: config.secondary }}
          timeToShow={["D", "H", "M", "S"]}
          timeLabels={{ m: null, s: null }}
          showSeparator
          size={30}
        />
      </View>

      <View style={styles.buttonNextView}>
        <TouchableOpacity
          style={(countDone && (time!= null)) ? styles.buttonNext : styles.buttonNextDisable}
          onPress={() => review()}
          disabled={(countDone && (time!= null)) ? false : true}
        >
          <Text style={{ fontSize: 34, padding: 20 }}>Review words...</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    )
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  chartView: {
    flex: 3,
  },
  chart: {
    marginTop: 10,
    borderRadius: 20,
    flex: 7,
    borderColor: "red",
    borderWidth: 1,
  },
  countdown: {
    flex: 1,
    marginTop: 15,
  },
  review: {
    flex: 1,
  },
  buttonNextView: {
    flex: 1,
    marginBottom: 10,
    // marginTop: 'auto',
    alignItems: "center",
  },
  charConfig: {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  },
  buttonNextDisable: {
    width: 340,
    backgroundColor: config.disable,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: config.backgroundColor,
  },
  buttonNext: {
    width: 340,
    backgroundColor: config.primary,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
  },
});
