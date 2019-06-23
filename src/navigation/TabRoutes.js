import { createAppContainer, createBottomTabNavigator } from "react-navigation";

// Stacks
import BrowseStack from "./BrowseStack";
import DiscoverStack from "./DiscoverStack";
import SavedStack from "./SavedStack";

const TabRoutes = createAppContainer(
  createBottomTabNavigator(
    {
      Browse: BrowseStack,
      Discover: DiscoverStack,
      Saved: SavedStack
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
          fontFamily: "Futura"
        }
      },
      animationEnabled: true,
      swipeEnabled: true
    }
  )
);

export default TabRoutes;
