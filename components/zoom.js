import React, { Component } from "react";
import { View, Text, ScrollView, Linking } from "react-native";
import Firebase from "../FirebaseConfig";

class Zoom extends Component {
  state = {
    zoom: [],
  };
  componentDidMount() {
    Firebase.database()
      .ref("zoom")
      .on("value", (snapshot) => {
        let project = snapshot.val() ? snapshot.val() : [];
        let i;
        let data = [];
        for (i in project) {
          data = [...data, project[i]];
        }
        this.setState({
          zoom: data,
        });
      });
    //fetching the data
  }
  render() {
    const zoom_links = this.state.zoom.map((item) => {
      return (
        <Text
          key={item.key}
          style={{
            color: "purple",
            fontSize: 22.5,
            paddingHorizontal: 2,
            textAlign: "center",

            textDecorationLine: "underline",
          }}
          onPress={() => Linking.openURL(item.link)}
        >
          {"\n"}
          {item.text}
        </Text>
      );
    });
    return (
      <ScrollView>
        <View>
          <Text
            style={{
              color: "black",
              fontSize: 25.5,
              fontWeight: "normal",
              textAlign: "center",
              paddingVertical: 10,
            }}
          >
            ZOOM LINKS
          </Text>
        </View>
        <View>{zoom_links}</View>
      </ScrollView>
    );
  }
}

export default Zoom;
