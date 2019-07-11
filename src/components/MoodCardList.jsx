import React from "react";
import PropTypes from "prop-types";
import MoodCard from "./MoodCard";

const MoodCardList = props => {
  const { items, navigation } = props;
  const onPress = (title, imageURI, id) => {
    return navigation.push("MoodDetailScreen", { imageURI, id, title });
  };

  return items.map(({ title, imageURI }, index) => {
    const id = index;
    return (
      <MoodCard
        title={title}
        imageURI={imageURI}
        onPress={() => onPress(title, imageURI, index)}
        key={id}
      />
    );
  });
};

MoodCardList.propTypes = {
  items: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default MoodCardList;
