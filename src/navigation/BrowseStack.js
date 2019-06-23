import { createStackNavigator } from "react-navigation";

import tabBarIcon from "../components/tabBarIcon";

// Screens
import BrowseScreen from "../screens/BrowseScreen";
import HeaderStyles from "../styles/HeaderStyle";

const BrowseStack = createStackNavigator(
  {
    Browse: {
      screen: BrowseScreen,
      navigationOptions: {
        headerTitle: "Mood",
        ...HeaderStyles
      }
    }
  },
  {
    initialRouteName: "Browse",
    navigationOptions: {
      animationEnabled: true,
      tabBarIcon: ({ tintColor }) =>
        tabBarIcon({ tintColor, icon: "ios-search" })
    }
  }
);

export default BrowseStack;
