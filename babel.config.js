module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      development: {
        plugins: ["@babel/plugin-transform-react-jsx-source"]
      },
      test: {
        presets: ["@babel/preset-env", "react-native"]
      }
    }
  };
};
