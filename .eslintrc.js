module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': 0,
        'indent': 0,
        'eol-last': 0,
        'import/no-duplicates': 0,
        'no-trailing-spaces': 0,
        'spaced-comment': 0,
        'key-spacing': 0,
        'space-before-blocks': 0,
        'keyword-spaceing': 0,
        'semi': 0,
        'block-spacing': 0,
        'object-curly-spacing': 0,
        'brace-style': 0,
        'camelcase': 0,
        'func-call-spacing': 'off',
        'space-inp-parens': 'off',
        'prefer-const': 0,
        'quote-props': 'off',
        'eqeqeq': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}