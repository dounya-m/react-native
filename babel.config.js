module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [],
    // plugins: ["nativewind/babel"],
  };
};
