import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import Home from "./components/home";
import About from "./components/about";
import Speaker from "./components/speaker";
import Contact from "./components/contact";
import Partners from "./components/partners";
import Updates from "./components/updates";
import Schedule from "./components/schedule";
import Zoom from "./components/zoom";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

const PartnerStack = createStackNavigator({
  Partners: {
    screen: Partners,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Partners",
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
const ZoomStack = createStackNavigator({
  Zoom: {
    screen: Zoom,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Zoom",
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
const ScheduleStack = createStackNavigator({
  Schedule: {
    screen: Schedule,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Schedule",
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
        headerTitle: "Speakers",
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
        headerTitle: "Contact Us",
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
const UpdatesStack = createStackNavigator({
  Updates: {
    screen: Updates,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Recent Updates",
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
  Partners: {
    screen: PartnerStack,
  },
  Speakers: {
    screen: SpeakerStack,
  },
  Schedule: {
    screen: ScheduleStack,
  },
  Updates: {
    screen: UpdatesStack,
  },
  Zoom: {
    screen: ZoomStack,
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
