module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 5
    },
    "rules": {
        "indent": ["error","tab"],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error","single"],
        "semi": ["error", "always"],
        "no-console": "warn",
        "no-unused-vars": "warn"
    }
};