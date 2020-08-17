import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Linking,
  List,
} from "react-native";
import Firebase from "../FirebaseConfig";
import { ListItem } from "react-native-elements";
class Updates extends Component {
  state = {
    links: [],
  };
  componentDidMount() {
    Firebase.database()
      .ref("link")
      .on("value", (snapshot) => {
        let project = snapshot.val() ? snapshot.val() : [];
        let i;
        let data = [];
        for (i in project) {
          data = [...data, project[i]];
        }
        this.setState({
          links: data,
        });
      });
    //fetching the data
  }
  render() {
    const updates = this.state.links.map((item) => {
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
            Recent Activities
          </Text>
        </View>
        <View>{updates}</View>
      </ScrollView>
    );
  }
}

export default Updates;
