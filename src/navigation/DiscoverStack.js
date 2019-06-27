import { createStackNavigator } from "react-navigation";

import tabBarIcon from "../components/tabBarIcon";

import DiscoverScreen from "../screens/DiscoverScreen";
import HeaderStyles from "../styles/HeaderStyle";

const DiscoverStack = createStackNavigator(
  {
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        headerTitle: "Discover",
        ...HeaderStyles
      }
    }
  },
  {
    initialRouteName: "Discover",
    navigationOptions: {
      animationEnabled: true,
      tabBarIcon: ({ tintColor }) => tabBarIcon({ tintColor, icon: "ios-pin" })
    }
  }
);

export default DiscoverStack;
