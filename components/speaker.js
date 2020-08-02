import React, { Component } from "react";
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  View,
} from "react-native";
import { Card, ListItem, Icon, Avatar } from "react-native-elements";
class speaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          key: 1,
          url: "https://www.icmidas.in/img/speakers/ajay2.jpg",
          name: "Padmashri Ajay Ray",
          designation: "IIEST, Shibpur",
          style: "{{width: 50, height: 50, borderRadius: 50}}",
        },
        {
          key: 2,
          url: "https://www.icmidas.in/img/speakers/unnamed1.jpg",
          name: "Ahmed Elngar",
          designation: "Beni-Suef University,Egypt",
          style: "{{width: 50, height: 50, borderRadius: 50}}",
        },
        {
          key: 3,
          url: "https://www.icmidas.in/img/speakers/gp4.jpg",

          name: "Dr. G.P. Li",
          designation:
            "Director, University of California,                              USA",
          style: "{{width: 50, height: 50, borderRadius: 50}}",
        },
        {
          key: 4,
          url: "https://www.icmidas.in/img/speakers/ss4.jpg",

          name: "Simeon Simoff",
          designation:
            "Dean of Computing, Engineering,                      Australia",
          style: "{{width: 50, height: 50, borderRadius: 50}}",
        },
        {
          key: 5,
          url: "https://www.icmidas.in/img/speakers/ssk.jpg",

          name: "Prof. Dr. Subarna Shakya",
          designation: "Institute of Engineering,Tribhuvan University,Nepal",
          style: "{{width: 50, height: 50, borderRadius: 50}}",
        },
        {
          key: 6,
          url: "https://www.icmidas.in/img/speakers/ab.jpg",

          name: "Mr. Aninda Bose ",
          designation: "Senior Editor, Springer Nature",
          style: "{{width: 50, height: 50, borderRadius: 50}}",
        },
        {
          key: 7,
          url: "https://www.icmidas.in/img/speakers/speaker7.png",

          name: "Dr. Martine Gadille",
          designation: "Aix Marseille University, France ",
          style: "{{width: 50, height: 50, borderRadius: 50}}",
        },
        {
          key: 8,
          url: "https://www.icmidas.in/img/speakers/speaker8.png",

          name: "Professor Marwan Al-Akaidi ",
          designation:
            "Vice President for Research,                  American University, Dubai",
          style: "{{width: 50, height: 50, borderRadius: 50}}",
        },
        {
          key: 9,
          url: "https://www.icmidas.in/img/speakers/speaker9.jpg",

          name: "Dr. Adheesh Budree",
          designation:
            "University of Cape Town,                           South Africa",
          style: "{{width: 50, height: 50, borderRadius: 50}}",
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
          <Image source={{ uri: element.url }} style={styles.image}></Image>
          <View
            style={{ margin: 10, flexDirection: "column", paddingRight: 10 }}
          >
            <Text
              style={{
                fontSize: 18.5,
                fontWeight: "bold",
                color: "#1e6db3",
                paddingBottom: 2.5,
              }}
            >
              {element.name}
            </Text>
            <Text numberOfLines={3} style={{ fontSize: 15 }}>
              {element.designation}
            </Text>
          </View>
        </View>
      );
    });
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 25,

              fontWeight: "normal",
              color: "black",
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            Keynote Speakers
          </Text>
        </View>
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
  image: {
    width: 100,
    height: 100,
    resizeMode: "center",
    borderRadius: 10,
  },
  lineStyle: {
    borderWidth: 0.7,
    borderColor: "black",
    margin: 15,
    opacity: 0.5,
  },
});
export default speaker;
