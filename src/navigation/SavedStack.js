import { createStackNavigator } from "react-navigation";

import tabBarIcon from "../components/tabBarIcon";

import SavedScreen from "../screens/SavedScreen";
import HeaderStyles from "../styles/HeaderStyle";

const SavedStack = createStackNavigator(
  {
    Saved: {
      screen: SavedScreen,
      navigationOptions: {
        headerTitle: "Saved Activities",
        ...HeaderStyles
      }
    }
  },
  {
    initialRouteName: "Saved",
    navigationOptions: {
      animationEnabled: true,
      tabBarIcon: ({ tintColor }) =>
        tabBarIcon({ tintColor, icon: "ios-wallet" })
    }
  }
);

export default SavedStack;
