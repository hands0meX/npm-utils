module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
    ],
    rules: {
      // 自定义规则
      "no-unused-vars": "off",
      "semi": ["error", "never"]
    },
  };
  