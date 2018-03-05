// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    extends: ['airbnb-base'],
    // add your custom rules here
    rules: {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'build' ? 'error' : 'off',
        // custom spaces rules
        indent: 'off',
        'indent-legacy': ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': 0,
        'max-len': ['error', 120, { ignoreComments: true }],
        'vue/no-template-key': 'off',
        'no-trailing-spaces': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
};
