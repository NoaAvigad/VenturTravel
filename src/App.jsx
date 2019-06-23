import { registerRootComponent } from "expo";
import React from "react";
import { View } from "react-native";
import TabRoutes from "./navigation/TabRoutes";

const style = {
  flex: 1
};

const App = () => (
  <View style={style}>
    <TabRoutes />
  </View>
);

registerRootComponent(App);
export default App;
