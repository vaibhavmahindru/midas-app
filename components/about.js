import React, { Component } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";

class Settings extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "dodgerblue",
              fontSize: 32,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            About The Conference
          </Text>

          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontWeight: "normal",
              paddingHorizontal: 12,
            }}
          >
            School of Computer Science, University of Petroleum and Energy
            Studies Dehradun India is organizing "International Conference on
            Machine Intelligence and Data Science Applications (MIDAS) 2020" in
            association with NGCT Society on September 4-5, 2020.{"\n"}
            {"\n"}
            MIDAS-2020 aims to provide a forum for researchers from both
            academia and industry to share their latest research contributions
            in the area of AI and Data Sciences and thus to exchange knowledge
            with the common goal of shaping the future. The best way to create
            memories is to gather and share the ideas, creativity and
            innovations. {"\n"}
            {"\n"}The conference program consists of wide range of sessions
            including distinguished lectures, paper presentations and poster
            presentations, along with prominent keynote speakers and industrial
            workshops. The theme for the conference is apt to the present
            scenario as currently world is driven by data and human interference
            is being limited by using various AI technologies.
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
export default Settings;
