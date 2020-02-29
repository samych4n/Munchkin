module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  settings:{
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },
  rules: {
	"no-useless-constructor":"off",
    "prettier/prettier":"error",
    "class-methods-use-this": "off",
	"import/prefer-default-export":"off",
	"import/extensions":"off",
	"no-plusplus":"off",
    "no-unused-vars":"off",
    "no-shadow":"off",
    "no-use-before-define":"off",
	"no-empty-function":"off"
  },
};
