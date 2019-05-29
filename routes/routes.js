import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from "react-navigation";

// Screens
import BrowseScreen from "../screens/BrowseScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import SavedScreen from "../screens/SavedScreen";

import CustomHeader from "../components/CustomHeader";
import HeaderStyles from "../styles/HeaderStyle";

const Browse = createStackNavigator(
  {
    Browse: {
      screen: BrowseScreen,
      navigationOptions: {
        headerTitle: "Mood",
        header: props => <CustomHeader {...props} />
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
      ...HeaderStyles,
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
        //header: props => <CustomHeader {...props} />
      }
    },
  },
  {
    initialRouteName: "Discover",
    navigationOptions: {
      ...HeaderStyles,
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
        //header: props => <CustomHeader {...props} />
      }
    },
  },
  {
    initialRouteName: "Saved",
    navigationOptions: {
      ...HeaderStyles,
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
      }
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
));

export default TabRoutes;