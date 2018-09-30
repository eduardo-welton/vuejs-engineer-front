module.exports = {
  presets: ["@vue/app"],
  env: {
    test: {
      presets: [
        [
          "env",
          {
            modules: "commonjs",
            useBuiltIns: "usage",
            debug: false
          }
        ],
        "stage-0",
        "react",
        "jest"
      ],
      plugins: [
        "transform-decorators-legacy",
        "transform-class-properties",
        "transform-es2015-modules-commonjs"
      ]
    }
  }
};
