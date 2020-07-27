import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import Home from "./components/home";
import About from "./components/about";
import Speaker from "./components/speaker";
import Contact from "./components/contact";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

class Feed extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Go To Detail Screen"
          onPress={() => this.props.navigation.navigate("Detail")}
        />
      </View>
    );
  }
}

const Detail = (props) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Detail</Text>
  </View>
);

const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Feed",
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          ),
        };
      },
    },
    Detail: {
      screen: Detail,
    },
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  }
);

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  },
});
const AboutStack = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "About",
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  },
});
const SpeakerStack = createStackNavigator({
  Speaker: {
    screen: Speaker,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Speaker",
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  },
});
const ContactStack = createStackNavigator({
  Contact: {
    screen: Contact,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Contact",
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  },
});
const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
  Feed: {
    screen: FeedStack,
  },
  Speaker: {
    screen: SpeakerStack,
  },
  Contact: {
    screen: ContactStack,
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
