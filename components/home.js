import React, { Component } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  View,
} from "react-native";
import { Card, ListItem } from "react-native-elements";
import * as Font from "expo-font";
//import BarlowCondensed from "../assets/fonts/BarlowCondensed-Regular.ttf";
class Home extends Component {
  render() {
    const image = {
      uri:
        "https://www.upes.ac.in/media/1103/home-hero-1.jpg?anchor=center&mode=crop&width=1385&height=750&rnd=131999762900000000",
    };
    /*const [loaded] = useFonts({
      BarlowCondensed: require("../assets/fonts/BarlowCondensed-Regular.ttf"),
    });

    if (!loaded) {
      return null;
    }*/

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Card
          title="MIDAS 2020"
          image={{
            uri:
              "https://www.upes.ac.in/media/1103/home-hero-1.jpg?anchor=center&mode=crop&width=1385&height=750&rnd=131999762900000000",
          }}
        >
          <View
            style={{
              backgroundColor: "#4845a1",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 23.6,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              INTERNATIONAL CONFERENCE{"\n"}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 24,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              ON{"\n"}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 22,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              MACHINE INTELLIGENCE & DATA SCIENCE APPLICATIONS
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 21,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              (MIDAS 2020){"\n"}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 23,
                textAlign: "center",
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              In ASSOCIATION with{"\n"}
              <Text
                style={{
                  color: "black",
                  fontSize: 27,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                "Next Generation Computing Technologies"
              </Text>
              {"\n"}
              (NGCT-Society){"\n"}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 34,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              September 4-5, 2020{"\n"}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 24,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              University of Petroleum and Energy Studies, Dehradun{"\n"}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 15,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              All accepted and presented papers will be published in the
              Springer's Algorithms for Intelligent Systems Series.
            </Text>
          </View>
        </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0c0880",
  },
});
export default Home;
