module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: ["./tsconfig.json"],
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript"
  ],
  rules: {
    "@typescript-eslint/semi": "off",
    "quotes": ["error", "single", { "allowTemplateLiterals": true, "avoidEscape": true }],
    "jsx-quotes": ["error", "prefer-single"],
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "max-len": ["error", { "code": 120, "ignoreComments": true }],
    "react/no-array-index-key": "off"
  },
};