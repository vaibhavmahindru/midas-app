import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from "react-native";

class partners extends Component {
  render() {
    const image = {
      uri:
        "https://lh3.googleusercontent.com/proxy/xqu_s6z7RBe2xNe6XxMv8EDQcvL_q5wT_ZIaxcWWJDC0DsCVBdX6C9gkQ0DF5vedx0OUEfS6gjqUHYv-RywHFukIy-ti7L-RUewEbGTyqS0SfWtyR4tgayd0sneQ6RqaZWBz3BZeBCCTlXX2Z6x99Q",
    };
    return (
      <View>
        <Image source={image} style={styles.image} />
        <Text>Our Partners</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 120,
    justifyContent: "center",
  },
});
export default partners;
