import React from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";
import style from "./ScreensStyles";

const BrowseScreen = () => {
  return (
    <SafeAreaView style={style.safeArea}>
      <StatusBar barStyle="light-content" />
      <Text style={style.text}>Moods</Text>
    </SafeAreaView>
  );
};

export default BrowseScreen;
