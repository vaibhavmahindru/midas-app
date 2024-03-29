import React, { Component } from "react";
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  View,
  Linking,
} from "react-native";
import { Card, ListItem } from "react-native-elements";
import * as Font from "expo-font";
import Firebase from "../FirebaseConfig";
import { Transition } from "react-native-reanimated";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      index: 0,
      pics: [
        "https://www.upes.ac.in/media/1103/home-hero-1.jpg?anchor=center&mode=crop&width=1385&height=750&rnd=131999762900000000",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMAjZQSiBw1hsC4UQv0pMdgUn1COIJClRfPQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyPVTboAk-Ec2t1RZU7l_pRDj2twutFVmEug&usqp=CAU",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsspfoKCJ1pAw0PVsONaeyn_wEFuVLEPWZog&usqp=CAU",
        //"https://encrypted-tbn0.gstatic.com/images?q=tbn%1GV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGiQCeaFcCkA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTp-rxy5gS99Dif8R4Y2P1leBtNtDl4qzdIOw&usqp=CAU",
      ],
    };
    this.timoutId = null;
    this.intervalId = null;
  }
  componentDidMount() {
    //fetching the data
    Firebase.database()
      .ref("updates")
      .on("value", (snapshot) => {
        let project = snapshot.val() ? snapshot.val() : [];
        let i;
        let data = [];
        for (i in project) {
          data = [...data, project[i]];
        }
        this.setState({
          list: data,
        });
      });
    //updating images
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.index === 4) {
          return { index: 0 };
        } else {
          return { index: prevState.index + 1 };
        }
      });
    }, 4000);
  }

  /* nextImgHandler = () => {
    clearInterval(this.intervalId)
    this.setState(prevState => ({ index: prevState.index + 1 }))
  }

  ImgHandler = () => {
    clearInterval(this.intervalId);
    this.setState((prevState) => {
      if (prevState.index === 3) {
        return { index: 0 };
      } else {
        return { index: prevState.index + 1 };
      }
    });
  };
*/
  render() {
    const updates = this.state.list.map((item) => {
      return (
        <Text
          key={item.key}
          style={{
            color: "white",
            fontSize: 18.5,
            paddingHorizontal: 2,
            textAlign: "center",
            paddingTop: 0,
          }}
        >
          {item}
        </Text>
      );
    });

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Card
          title="MIDAS 2020"
          titleStyle={{ fontSize: 28, fontWeight: "bold" }}
          image={{
            uri: this.state.pics[this.state.index],
          }}
        >
          <View
            style={{
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
              Springer's Algorithms for Intelligent Systems Series.{"\n"}
              {"\n"}
            </Text>

            <View>{updates}</View>
          </View>
        </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
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
