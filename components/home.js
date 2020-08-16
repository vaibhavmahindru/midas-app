import React, { Component } from "react";
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  View,
} from "react-native";
import { Card, ListItem } from "react-native-elements";
import * as Font from "expo-font";
import Firebase from "../FirebaseConfig";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    /*Firebase.database()
      .ref("updates/")
      .set(["test1", "test2"])
      .then(() => {
        console.log("worked");
      })
      .catch((error) => {
        console.log(error);
      });*/
    Firebase.database()
      .ref("updates")
      .once("value", (data) => {
        this.setState({
          list: data,
        });
        console.log("set", this.state.list);
        //console.log(data);
      });
  }
  render() {
    const image = {
      uri:
        "https://www.upes.ac.in/media/1103/home-hero-1.jpg?anchor=center&mode=crop&width=1385&height=750&rnd=131999762900000000",
    };
    //console.log(Firebase);
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Card
          title="MIDAS 2020"
          titleStyle={{ fontSize: 25, fontWeight: "bold" }}
          image={{
            uri:
              "https://www.upes.ac.in/media/1103/home-hero-1.jpg?anchor=center&mode=crop&width=1385&height=750&rnd=131999762900000000",
          }}
        >
          <View
            style={{
              //backgroundColor: "#4845a1",
              backgroundColor: "#525B56",
              paddingVertical: 5,
              paddingHorizontal: 2,
            }}
          >
            <Text
              style={{
                color: "#F2EAED",
                fontSize: 23.6,
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              INTERNATIONAL CONFERENCE
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 24,
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              ON
            </Text>
            <Text
              style={{
                color: "#F2EAED",
                fontSize: 22,
                textAlign: "center",
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
                color: "#e3ca7f",
                fontSize: 23,
                textAlign: "center",

                marginTop: 10,
              }}
            >
              In ASSOCIATION with{"\n"}
              <Text
                style={{
                  color: "#F2EAED",
                  fontSize: 27,

                  textAlign: "center",
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
                fontSize: 30,
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              September 4-5, 2020
            </Text>

            <Image
              //source={{ uri: "https://sg.inflibnet.ac.in/retrieve/6021828" }}
              source={{
                uri:
                  "https://indiaeducationdiary.in/wp-content/uploads/2017/11/UPES-New-Logo-696x203.png",
              }}
              style={styles.image}
            ></Image>
            <Text
              style={{
                color: "#edf259",
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 0,
              }}
            >
              All accepted and presented papers will be published in the
              Springer's Algorithms for Intelligent Systems Series.
            </Text>
            <Text
              style={{
                color: "#edf259",
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 0,
              }}
            >
              {this.state.list}
            </Text>
          </View>
        </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#0c0880",
    backgroundColor: "#16235A",
  },
  image: {
    width: 200,
    height: 90,

    marginLeft: 68,
    resizeMode: "center",
  },
});
export default Home;
