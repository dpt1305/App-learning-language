import { BarChart } from "react-native-chart-kit";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import CountDown from "react-native-countdown-component";
//redux 
import { useDispatch, useSelector } from "react-redux";
// configg
import config from "../../config";
import { userRemaningSelector, wordsSelector } from "../../redux/selector";


export default function OverviewScreen() {
  const [countDone, setCountDone] = useState(false);
  const [time, setTime] = useState(0);
  const { width, height } = Dimensions.get("window");

  //# get time out
  const user = useSelector(userRemaningSelector);
  console.log(user);

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
  // console.log('outside effect ', timeoutFromHandleTimeout);
  
  // useEffect(() => {
  //   timeoutFromHandleTimeout = handleTimeout(user.timeout);
  //   console.log('eeffect', timeoutFromHandleTimeout);
  // }, [user.timeout]);
  
  //# get data for report
  const data = {
    labels: ["0", "1", "2", "3", "4", "5"],
    datasets: [
      {
        data: user.dataReport,
      },
    ],
  };

  //# function go to review screen
  const review = () => {
    navigation.navigate("Type");
  }
  return (
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
          // onPress={timeoutFromHandleTimeout}
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
          style={(countDone && (timeoutFromHandleTimeout!= null)) ? styles.buttonNext : styles.buttonNextDisable}
          onPress={() => review()}
          disabled={(countDone && (timeoutFromHandleTimeout!= null)) ? false : true}
        >
          <Text style={{ fontSize: 34, padding: 20 }}>Review words...</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
