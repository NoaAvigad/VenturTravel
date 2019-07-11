import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Colors from "../styles/Colors";

const style = StyleSheet.create({
  icon: {
    color: Colors.white
  }
});

const Left = () => {
  return <FontAwesomeIcon icon={faAngleLeft} size={32} style={style.icon} />;
};

export default Left;
