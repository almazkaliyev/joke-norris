module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:solid/typescript',
    'prettier',
  ],
  plugins: [
    'eslint-plugin-import-helpers',
    'jsx-a11y',
    'prettier',
    'solid',
    'import',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: false,
      },
    ],
    'comma-dangle': 'off',
    'eol-last': 'error',
    'global-require': 'off',
    'import/no-cycle': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        alphabetize: {
          ignoreCase: true,
          order: 'asc',
        },
        groups: [
          [
            '/^solid-js/',
            '/^@solidjs/',
          ],
          'module',
          [
            'parent',
            'sibling',
            'index',
          ],
        ],
        newlinesBetween: 'always',
      },
    ],
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        bundledDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    // TODO: doesn't work properly
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //   },
    // ],
    'import/prefer-default-export': 'off',
    'import/newline-after-import': [
      'error',
      {
        count: 1,
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'no-param-reassign': 'off',
    'no-trailing-spaces': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    semi: [
      'error',
      'never',
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'object-shorthand': [
      'error',
      'always',
    ],
  },
};
