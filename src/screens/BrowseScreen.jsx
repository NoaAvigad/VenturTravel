import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import MoodCardList from "../components/MoodCardList";
import style from "./ScreensStyles";

const gridStyles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});

const items = [
  { title: "Live Music" },
  { title: "Live Music" },
  { title: "Live Music" },
  { title: "Live Music" }
];

const BrowseScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={style.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={gridStyles.container}>
          <MoodCardList items={items} navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

BrowseScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default BrowseScreen;
