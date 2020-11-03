module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: false,
    node: true
  },
  extends: ["eslint:recommended"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  // required to lint *.vue files
  plugins: ["vue", "prettier"],
  // add your custom rules here
  rules: {
    "prettier/prettier": ["error"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    indent: ["error", 2],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  },
  globals: {}
};
