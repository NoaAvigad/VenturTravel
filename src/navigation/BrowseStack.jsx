import React from "react";
import { createStackNavigator } from "react-navigation";

import tabBarIcon from "../components/tabBarIcon";
import MoodDetailScreen from "../screens/MoodDetailScreen";

// Screens
import BrowseScreen from "../screens/BrowseScreen";
import HeaderStyles from "../styles/HeaderStyle";
import Left from "../components/leftNavigationButton";

const BrowseStack = createStackNavigator(
  {
    Browse: {
      screen: BrowseScreen,
      navigationOptions: {
        headerTitle: "Mood",
        headerBackTitle: " "
      }
    },
    MoodDetailScreen: {
      screen: MoodDetailScreen,
      navigationOptions: props => {
        const { navigation } = props;
        return {
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "Futura",
            zIndex: 1,
            textAlign: "center",
            lineHeight: 23
          },
          title: navigation.state.params.title,
          headerBackImage: <Left />,
          headerBackTitle: " "
        };
      }
    }
  },
  {
    initialRouteName: "Browse",
    defaultNavigationOptions: {
      ...HeaderStyles
    },
    navigationOptions: {
      animationEnabled: true,
      tabBarIcon: ({ tintColor }) =>
        tabBarIcon({ tintColor, icon: "ios-search" })
    }
  }
);

export default BrowseStack;
