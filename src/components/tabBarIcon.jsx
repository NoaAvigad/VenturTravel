import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const tabBarIcon = ({ tintColor, icon }) => {
  return <Ionicons name={icon} size={25} color={tintColor} />;
};

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default tabBarIcon;
