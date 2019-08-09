'use strict';

module.exports = {
    rules: {
        'no-console': 0,
        'indent': [ 2, 4, { SwitchCase: 1 } ],
        'no-unused-vars': 1,
        'space-before-function-paren': [ 2, 'always' ],
        'object-curly-spacing': [ 2, 'always' ],
        'array-bracket-spacing': [ 2, 'always' ],
        'computed-property-spacing': 'off',
        'require-jsdoc': [
            0,
            {
                'require': {
                    'FunctionDeclaration': true,
                    'MethodDefinition': true,
                    'ClassDeclaration': true
                }
            }
        ],
        'padded-blocks': [ 2, { classes: 'always' } ],
        'vue/order-in-components': [
            'warning',
            {
                'order': [
                    'el',
                    'name',
                    'parent',
                    'functional',
                    [ 'delimiters', 'comments' ],
                    [ 'components', 'directives', 'filters' ],
                    'extends',
                    'mixins',
                    'inheritAttrs',
                    'model',
                    [ 'props', 'propsData' ],
                    'data',
                    'computed',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    'watch',
                    [ 'template', 'render' ],
                    'renderError',
                ]
            }
        ],
        'max-len': [
            'error',
            {
                'ignoreComments': true,
                'ignoreRegExpLiterals': true,
            }
        ],
    }
};
