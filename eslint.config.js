import config from "eslint-config-airbnb";

export default [
    ...[].concat(config),
    {
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
        },
    },
];
