/* eslint-disable react-native/no-color-literals */
import React from "react";
import {
  TouchableOpacity,
  Dimensions,
  Text,
  Image,
  View,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";

const cardWidth = (Dimensions.get("window").width - 10) / 2;

const styles = StyleSheet.create({
  image: {
    height: cardWidth,
    width: cardWidth
  },
  text: {
    color: "#fff",
    fontSize: 10,
    textAlign: "center"
  },
  touchable: {
    alignItems: "center",
    height: cardWidth,
    justifyContent: "center",
    marginBottom: 4,
    marginTop: 4,
    width: cardWidth
  },
  view: {
    backgroundColor: "transparent",
    position: "absolute"
  }
});

const MoodCard = ({ onPress, imageURI, title }) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <Image style={styles.image} source={{ uri: imageURI }} />
      <View style={styles.view}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

MoodCard.propTypes = {
  onPress: PropTypes.func.isRequired,
  imageURI: PropTypes.string,
  title: PropTypes.string.isRequired
};

MoodCard.defaultProps = {
  imageURI: "http://placekitten.com/200/300"
};

export default MoodCard;
