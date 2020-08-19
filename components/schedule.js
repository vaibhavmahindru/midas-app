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

class Schedule extends Component {
  render() {
    return (
      <ScrollView>
        <Card title="DAY 1"></Card>
        <Card title="DAY 2"></Card>
      </ScrollView>
    );
  }
}

export default Schedule;
