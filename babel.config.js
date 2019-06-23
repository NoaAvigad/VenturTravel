module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      test: {
        presets: ["@babel/preset-env", "react-native"]
      }
    }
  };
};
