module.exports = {
  testMatch: ["**/?(*.)test.js?(x)"],
  transform: {
    "^.+\\.(js?|jsx?)$": "babel-jest"
  },
  transformIgnorePatterns: ["node_modules/(?!react-native|react-navigation)/"]
};
