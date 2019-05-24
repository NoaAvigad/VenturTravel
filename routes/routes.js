import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

// Screens
import BrowseScreen from "../screens/BrowseScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import SavedScreen from "../screens/SavedScreen"

import CustomHeader from "../components/CustomHeader";
import HeaderStyles from "../styles/HeaderStyle";

const Routes = createStackNavigator(
  {
    Browse: {
      screen: BrowseScreen,
      navigationOptions: {
        headerTitle: "Mood",
        header: props => <CustomHeader {...props} />
      } 
    },
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        headerTitle: "Discover",
        header: props => <Text>Discover Page is coming soon...</Text>
      }
    },
    Saved: {
      screen: SavedScreen,
      navigationOptions: {
        headerTitle: "Saved",
        header: props => <Text>Saved Page is coming soon...</Text>
      }
    }
  },
  {
    initialRouteName: "Browse",
    navigationOptions: {
      ...HeaderStyles,
      animationEnabled: true
    }
  }
);

export default Routes;