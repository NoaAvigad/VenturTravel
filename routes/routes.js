import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { Text, SafeAreaView } from "react-native";

// Screens
import BrowseScreen from "../screens/BrowseScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import SavedScreen from "../screens/SavedScreen";

import HeaderStyles from "../styles/HeaderStyle";

const Browse = createStackNavigator(
  {
    Browse: {
      screen: BrowseScreen,
      navigationOptions: {
        headerTitle: "Mood",
        ...HeaderStyles
      }
    },
    // MoodCards: {
    //   screen: MoodCards, // Mood is selected, show relevant cards (categories for that mood)
    //   navigationOptions: {
    //     headerTitle: "", // TODO: the selected mood
    //     header: props => <Text>Coming soon...</Text>
    //   }
    // },
    
  },
  {
    initialRouteName: "Browse",
    navigationOptions: {
      animationEnabled: true,
      tabBarIcon: ({ focused, tintColor }) => {
        return <Ionicons name='ios-search' size={25} color={tintColor} />;
      }
    }
  }
);

const Discover = createStackNavigator(
  {
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        headerTitle: "Discover",
        ...HeaderStyles,
      }
    },
  },
  {
    initialRouteName: "Discover",
    navigationOptions: {
      animationEnabled: true,
      tabBarIcon: ({ focused, tintColor }) => {
        return <Ionicons name='ios-pin' size={25} color={tintColor} />;
      }
    }
  }
);

const Saved = createStackNavigator(
  {
    Saved: {
      screen: SavedScreen,
      navigationOptions: {
        headerTitle: "Saved Activities",
        ...HeaderStyles,
      }
    },
  },
  {
    initialRouteName: "Saved",
    navigationOptions: {
      animationEnabled: true,
      tabBarIcon: ({ focused, tintColor }) => {
        return <Ionicons name='ios-wallet' size={25} color={tintColor} />;
      },
    }
  }
);

const TabRoutes = createAppContainer(createBottomTabNavigator(
  {
    Browse: Browse,
    Discover: Discover,
    Saved: Saved
  },
  {
    initialRouteName: "Browse",
    tabBarOptions: {
      activeTintColor: "#FCFCFC",
      inactiveTintColor: "#A8A8A8",
      style: {
        height: 60,
        paddingVertical: 5,
        backgroundColor: "#000"
      },
      labelStyle: {
        fontSize: 12,
        lineHeight: 20,
        fontFamily: "Futura",
      },
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
));

export default TabRoutes;