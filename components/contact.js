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
import GoogleStaticMap from "react-native-google-static-map";
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
          style={{ margin: 5, flexDirection: "row", paddingBottom: 5 }}
          key={element.key}
        >
          <Text style={{ fontSize: 20, paddingLeft: 18 }}>
            {element.name}
            {"\n"}
            <Text style={{ color: "grey", fontSize: 15 }}>
              {element.detail}
            </Text>
          </Text>
          <Text style={{ marginLeft: 30 }}>
            <MaterialCommunityIcons
              name="gmail"
              size={30}
              color="black"
              onPress={() => Linking.openURL("mailto:{element.mail}")}
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
              textAlign: "center",
              marginTop: 8,
              marginBottom: 10,
              color: "black",
              fontWeight: "bold",
            }}
          >
            Enquiry Email
          </Text>
          <Text
            style={{
              color: "blue",
              fontSize: 20,

              textAlign: "center",
            }}
            onPress={() => Linking.openURL("mailto:icmidas2020@gmail.com")}
          >
            icmidas2020@gmail.com
          </Text>

          <View style={styles.lineStyle} />
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",

              marginBottom: 10,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Conference Conveners
          </Text>

          <View>{this.list()}</View>
          <View style={styles.lineStyle} />
          <View>
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                marginBottom: 5,
                fontWeight: "bold",
                color: "black",
              }}
            >
              Event Location
            </Text>
            <GoogleStaticMap
              style={styles.map}
              latitude={"30.415945"}
              longitude={"77.966833"}
              zoom={13}
              size={{ width: 300, height: 350 }}
              apiKey={"AIzaSyBTAvEkphg5vx1EJ5SVQQ-nXc2BB6owmV0"}
            />
            <Text
              style={{
                color: "grey",
                fontSize: 17,
                margin: 10,
                paddingHorizontal: 5,
                fontWeight: "bold",
              }}
            >
              University of Petroleum and Energy Studies,{"\n"}P.O BIDHOLI
              VIA-PREM NAGAR,{"\n"}DEHRADUN-248007
            </Text>
          </View>
          <View style={styles.lineStyle} />
          <View>
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                marginBottom: 5,
                fontWeight: "bold",
                color: "black",
              }}
            >
              Important Numbers
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 17,
                margin: 10,
                paddingHorizontal: 5,
                fontWeight: "bold",
              }}
            >
              +91 9711938087{"\n"}+91 8902691510
            </Text>
          </View>
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
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 15,
  },
});

export default contact;
