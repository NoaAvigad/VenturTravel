module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      test: {
        presets: ["react-native", ["@babel/preset-env"]]
      }
    }
  };
};
