module.exports = {
    extends: ["airbnb-base", "prettier", "plugin:react/recommended"],
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": ["error", {
            "singleQuote": true,
            "bracketSpacing": true,
            "jsxBracketSameLine": true,
            "parser": "flow"
        }],
        "comma-dangle": 0,
        "no-console": [
            "error",
            {
                allow: ["warn", "error", "log"]
            }
        ]
    },
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
};