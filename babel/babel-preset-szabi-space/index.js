module.exports = function () {
  return {
    plugins: [
      require("@babel/plugin-proposal-nullish-coalescing-operator"),
      require("@babel/plugin-transform-arrow-functions"),
      require("@babel/plugin-transform-classes"),
      require("@babel/plugin-transform-destructuring"),
      require("@babel/plugin-transform-spread"),
      require("@babel/plugin-transform-template-literals"),
    ],
  };
};
