import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          key: 1,
          name: "Dr. Tanupriya Choudhury",
          detail: "School of Computer Science, UPES",
          mail: "Tanupriya@ddn.upes.ac.in",
        },
        {
          key: 2,
          name: "Dr. Ravi Tomar",
          detail: "School of Computer Science, UPES",
          mail: "rtomar@ddn.upes.ac.in",
        },
        {
          key: 3,
          name: "Mr. Amitava Choudhury",
          detail: "School of Computer Science, UPES",
          mail: "achoudhury@ddn.upes.ac.in",
        },
      ],
    };
  }
  list = () => {
    return this.state.array.map((element) => {
      return (
        <View
          style={{ margin: 10, flexDirection: "row", paddingBottom: 5 }}
          key={element.key}
        >
          <Text>
            {element.name}
            {"\n"}
            {element.detail}
          </Text>
          <Text>
            <MaterialCommunityIcons
              name="gmail"
              size={28}
              color="black"
              onPress={() => Linking.openURL("mailto:{element.mail}")}
              iconStyle={{ marginLLeft: 10 }}
            />
          </Text>
        </View>
      );
    });
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 10,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              marginLeft: 6,
              marginTop: 8,
              marginBottom: 15,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Conference Conveners
          </Text>
          <View>{this.list()}</View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",

    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});

export default contact;
