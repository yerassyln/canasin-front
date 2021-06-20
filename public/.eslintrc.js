module.exports = {
    root: true,
    extends: ['@react-native-community', 'plugin:react-hooks/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'prettier/prettier': 'warn',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-explicit-any': 0,
        'no-shadow': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'react/jsx-no-undef': 2,
        'react/no-unknown-property': 2,
        'react-hooks/exhaustive-deps': 0,
        'comma-dangle': 0,
        'react/prop-types': 'off'
    }
};
