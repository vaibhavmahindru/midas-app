import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { Card } from "react-native-elements";
import Firebase from "../FirebaseConfig";
class Schedule extends Component {
  state = {
    schedule1: [],
    schedule2: [],
  };
  componentDidMount() {
    Firebase.database()
      .ref("schedule/day_1")
      .on("value", (snapshot) => {
        let project = snapshot.val() ? snapshot.val() : [];
        let i;
        let data = [];
        for (i in project) {
          data = [...data, project[i]];
        }
        this.setState({
          schedule1: data,
        });
      });
    //fetching the data
    Firebase.database()
      .ref("schedule/day_2")
      .on("value", (snapshot) => {
        let project = snapshot.val() ? snapshot.val() : [];
        let i;
        let data = [];
        for (i in project) {
          data = [...data, project[i]];
        }
        this.setState({
          schedule2: data,
        });
      });
  }
  render() {
    const day1 = this.state.schedule1.map((item) => {
      return (
        <Text
          key={item.key}
          style={{
            color: "black",
            fontSize: 20,
            paddingHorizontal: 2,
            textAlign: "center",
          }}
        >
          {item.time}
          {"\t\t\t\t\t\t"}
          {item.text}
          {"\n"}
        </Text>
      );
    });
    const day2 = this.state.schedule2.map((item) => {
      return (
        <Text
          key={item.key}
          style={{
            color: "black",
            fontSize: 20,
            paddingHorizontal: 2,
            textAlign: "center",
          }}
        >
          {item.time}
          {"\t\t\t\t\t\t"}
          {item.text}
          {"\n"}
        </Text>
      );
    });
    return (
      <ScrollView>
        <Card title="DAY 1">
          <View>{day1}</View>
        </Card>
        <Card title="DAY 2">
          <View>{day2}</View>
        </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.7,
    borderColor: "black",
    margin: 20,
  },
});
export default Schedule;
