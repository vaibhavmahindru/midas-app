import React, { Component } from "react";
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  View,
} from "react-native";

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
        },
        {
          key: 2,
          url: "https://www.icmidas.in/img/speakers/unnamed1.jpg",
          name: "Ahmed Elngar",
          designation: "Beni-Suef University,Egypt",
        },
        {
          key: 3,
          url: "https://www.icmidas.in/img/speakers/gp4.jpg",
          name: "Dr. G.P. Li",
          designation:
            "Director, University of California,                              USA",
        },
        {
          key: 4,
          url: "https://www.icmidas.in/img/speakers/ss4.jpg",
          name: "Simeon Simoff",
          designation:
            "Dean of Computing, Engineering,                      Australia",
        },
        {
          key: 5,
          url: "https://www.icmidas.in/img/speakers/ssk.jpg",
          name: "Prof. Dr. Subarna Shakya",
          designation: "Institute of Engineering,Tribhuvan University,Nepal",
        },
        {
          key: 6,
          url: "https://www.icmidas.in/img/speakers/ab.jpg",
          name: "Mr. Aninda Bose ",
          designation: "Senior Editor, Springer Nature",
        },
        {
          key: 7,
          url: "https://www.icmidas.in/img/speakers/speaker7.png",
          name: "Dr. Martine Gadille",
          designation: "Aix Marseille University, France ",
        },
        {
          key: 8,
          url: "https://www.icmidas.in/img/speakers/speaker8.png",
          name: "Professor Marwan Al-Akaidi ",
          designation:
            "Vice President for Research,                  American University, Dubai",
        },
        {
          key: 9,
          url: "https://www.icmidas.in/img/speakers/speaker9.jpg",
          name: "Dr. Adheesh Budree",
          designation:
            "University of Cape Town,                           South Africa",
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
              fontWeight: "normal",
              color: "black",
            }}
          >
            Keynote Speakers
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
  image: {
    width: 80,
    height: 80,
    resizeMode: "center",
    borderRadius: 50,
  },
});
export default speaker;
