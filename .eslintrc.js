module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
            // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
        js: 'never',
        vue: 'never'
      }],
      // disallow reassignment of function parameters
      // disallow parameter object manipulation except for specific exclusions
      'no-param-reassign': ['error', {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e' // for e.returnvalue
        ]
      }],
      'no-underscore-dangle': 'off',
      'no-bitwise': ['error', { 'allow': ['&', '|','<<'] }],
      // allow optionalDependencies
      'import/no-extraneous-dependencies': ['error', {
        optionalDependencies: ['test/unit/index.js']
      }],
      'import/no-unresolved': 2,
      // import not extensions
      'import/extensions': ['never', {
        '.js': 'never',
        '.vue': 'never',
      }],
      'import/ignore': [],
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // 统一换行符，"\n" unix(for LF) and "\r\n" for windows(CRLF)，默认unix
      // off或0: 禁用规则
      'linebreak-style': 'off',
      'no-restricted-syntax': 0,
      'no-continue': 0,
      "no-shadow": ['error', { 'builtinGlobals': false, 'hoist': 'never' }],
      'func-names': ['error', 'never'],
      "prefer-destructuring": ["error", {
        "array": false,
        "object": true
      }, {
        "enforceForRenamedProperties": false
      }]
    }
};