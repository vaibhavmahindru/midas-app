import React, { Component } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  View,
} from "react-native";

class Home extends Component {
  render() {
    const image = {
      uri:
        "https://www.upes.ac.in/media/1103/home-hero-1.jpg?anchor=center&mode=crop&width=1385&height=750&rnd=131999762900000000",
    };

    const Detail = (props) => (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail</Text>
      </View>
    );

    return (
      <ImageBackground
        source={image}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
        }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View
            style={{
              paddingTop: 40,
              paddingBottom: 80,
              paddingHorizontal: 6,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 26,

                fontWeight: "bold",
              }}
            >
              {"\n"}INTERNATIONAL CONFERENCE
            </Text>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 24,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              ON
            </Text>
            <Text
              style={{
                color: "#ffffff",
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
                color: "#ffffff",
                fontSize: 23,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              In ASSOCIATION with{"\n"}{" "}
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
                color: "#ffffff",
                fontSize: 22,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              University of Petroleum and Energy Studies, Dehradun{"\n"}
            </Text>
            <Button
              onPress={Detail}
              style={styles.appButtonContainer}
              title="Our Partners"
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.29)",
  },
});
export default Home;
