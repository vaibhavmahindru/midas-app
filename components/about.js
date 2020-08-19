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
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            School of Computer Science, University of Petroleum and Energy
            Studies Dehradun India is organizing "International Conference on
            Machine Intelligence and Data Science Applications (MIDAS) 2020" in
            association with NGCT Society on September 4-5, 2020.{"\n"}
            {"\n"}
            The goal of the conference is to bring to promote and provide a
            platform for researchers, academia and practitioners to meet and
            exchange ideas on recent theoretical and applied Machine
            Intelligence and Data Sciences research. The theme for MIDAS 2020
            is: Machine Intelligence and Data Analytics{"\n"}
            {"\n"}The conference program consists of wide range of sessions
            including distinguished lectures, paper presentations, poster
            sessions and project demonstrations, along with prominent keynote
            speakers and industrial workshops.{"\n"}
            {"\n"}
            The conference theme aims to reflect the need for research and
            development in order to unleash the transformational potentials of
            emerging technologies.
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
