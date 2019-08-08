'use strict';

module.exports = {
    rules: {
        'no-console': 0,
        'indent': [ 2, 4, { SwitchCase: 1 } ],
        'no-unused-vars': 1,
        'space-before-function-paren': [ 2, 'always' ],
        'object-curly-spacing': [ 2, 'always' ],
        'array-bracket-spacing': [ 2, 'always' ],
        'require-jsdoc': [ 0, {
            'require': {
                'FunctionDeclaration': true,
                'MethodDefinition': true,
                'ClassDeclaration': true
            }
        } ],
        'padded-blocks': [ 2, { classes: 'always' } ]
    }
};
