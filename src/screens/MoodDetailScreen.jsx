import React, { useLayoutEffect } from "react";
import { Text, Image, SafeAreaView, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import style from "./ScreensStyles";

const localStyle = StyleSheet.create({
  image: {
    height: 200,
    width: 200
  }
});

const MoodDetailScreen = ({ navigation }) => {
  const { setParams } = navigation;

  const { title, imageURI } = navigation.state.params;

  useLayoutEffect(() => {
    setParams({ title });
  }, []);

  return (
    <SafeAreaView style={style.safeArea}>
      <Text style={style.text}>{title}</Text>
      <Image style={localStyle.image} source={{ uri: imageURI }} />
    </SafeAreaView>
  );
};

MoodDetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default MoodDetailScreen;
