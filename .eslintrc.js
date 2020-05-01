const EslintConfig = require('@datafe/config/eslint');
const PrettierConfig = require('./prettier.config');

EslintConfig.parserOptions.tsconfigRootDir = __dirname;

module.exports = {
    ...EslintConfig,
    rules: {
        ...EslintConfig.rules,
        'prettier/prettier': [2, PrettierConfig, { usePrettierrc: false }],
        // 限制使用 any, 如确实需要, 请显式 disable
        '@typescript-eslint/unbound-method': [0],
        '@typescript-eslint/explicit-function-return-type': [0]
    }
};
