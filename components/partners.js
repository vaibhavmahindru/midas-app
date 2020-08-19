import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { Card } from "react-native-elements";
class partners extends Component {
  render() {
    const image = {
      uri:
        "https://lh3.googleusercontent.com/proxy/xqu_s6z7RBe2xNe6XxMv8EDQcvL_q5wT_ZIaxcWWJDC0DsCVBdX6C9gkQ0DF5vedx0OUEfS6gjqUHYv-RywHFukIy-ti7L-RUewEbGTyqS0SfWtyR4tgayd0sneQ6RqaZWBz3BZeBCCTlXX2Z6x99Q",
    };
    return (
      <ScrollView>
        <Card title="ACADEMIC PARTNERS">
          <View>
            <Image
              style={{ width: 320, height: 150 }}
              resizeMode="stretch"
              source={{ uri: "https://www.icmidas.in/img/sponsors/duytan.png" }}
            />
            <View style={styles.lineStyle} />
            <Image
              style={{ width: 200, height: 200, marginLeft: 65 }}
              resizeMode="stretch"
              source={{ uri: "https://www.icmidas.in/img/sponsors/sfax.jpg" }}
            />
          </View>
        </Card>
        <Card title="TECHNICAL PARTNERS">
          <View>
            <Image
              style={{ width: 320, height: 150 }}
              resizeMode="stretch"
              source={{
                uri: "https://www.icmidas.in/img/sponsors/melbourne.jfif",
              }}
            />
            <View style={styles.lineStyle} />
            <Image
              style={{ width: 220, height: 150, marginLeft: 45 }}
              resizeMode="stretch"
              source={{ uri: "https://www.icmidas.in/img/sponsors/ci2s22.jpg" }}
            />
            <View style={styles.lineStyle} />
            <Image
              style={{ width: 200, height: 200, marginLeft: 65 }}
              resizeMode="stretch"
              source={{ uri: "https://www.icmidas.in/img/sponsors/IAPFE.jpg" }}
            />
            <View style={styles.lineStyle} />
            <Image
              style={{ width: 320, height: 120 }}
              resizeMode="stretch"
              source={{ uri: "https://www.icmidas.in/img/sponsors/iet.png" }}
            />
            <View style={styles.lineStyle} />
            <Image
              style={{ width: 200, height: 200, marginLeft: 65 }}
              resizeMode="stretch"
              source={{ uri: "https://www.icmidas.in/img/sponsors/sfax.jpg" }}
            />
            <View style={styles.lineStyle} />
            <Image
              style={{ width: 200, height: 200, marginLeft: 65 }}
              resizeMode="stretch"
              source={{
                uri: "https://www.icmidas.in/img/sponsors/INDO-UK.jpg",
              }}
            />
            <View style={styles.lineStyle} />
            <Image
              style={{ width: 300, height: 150, marginLeft: 15 }}
              resizeMode="stretch"
              source={{ uri: "https://www.icmidas.in/img/sponsors/acm.png" }}
            />
            <View style={styles.lineStyle} />
            <Image
              style={{ width: 200, height: 200, marginLeft: 65 }}
              resizeMode="stretch"
              source={{
                uri: "https://www.icmidas.in/img/sponsors/logo%20copy.jpg",
              }}
            />
            <View style={styles.lineStyle} />
            <Image
              style={{ width: 200, height: 200, marginLeft: 65 }}
              resizeMode="stretch"
              source={{
                uri: "https://www.icmidas.in/img/sponsors/IETALogo.jpg",
              }}
            />
          </View>
        </Card>
        <Card title="PUBLICATION PARTNERS">
          <View>
            <Image
              style={{ width: 320, height: 150 }}
              resizeMode="stretch"
              source={{ uri: "https://www.icmidas.in/img/springer2.png" }}
            />
            <View style={styles.lineStyle} />
            <Image
              style={{ width: 320, height: 150 }}
              resizeMode="stretch"
              source={{ uri: "https://www.icmidas.in/img/sponsors/inder.png" }}
            />
            <View style={styles.lineStyle} />
            <Image
              style={{ width: 220, height: 150, marginLeft: 65 }}
              resizeMode="stretch"
              source={{ uri: "https://www.icmidas.in/img/sponsors/igi.png" }}
            />
            <View style={styles.lineStyle} />
            <Image
              style={{ width: 320, height: 150 }}
              resizeMode="stretch"
              source={{ uri: "https://www.icmidas.in/img/sponsors/crc.png" }}
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 120,
    justifyContent: "center",
  },
  lineStyle: {
    borderWidth: 0.7,
    borderColor: "black",
    margin: 20,
  },
});
export default partners;
