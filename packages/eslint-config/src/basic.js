// https://eslint.org/docs/user-guide/getting-started
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    // https://github.com/standard/eslint-config-standard
    'standard',
    // https://github.com/prettier/eslint-plugin-prettier
    'plugin:prettier/recommended',
  ],
}
