module.exports = {
	env: {
		browser: true,
		commonjs: true,
		node: true,
		es6: true
	},
	extends: "eslint:recommended",
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
    },
    parser: "babel-eslint",
		sourceType: "module"
	},
  plugins: ["vue", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"no-console": 0,
    "no-tabs": "off",
    indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["off", "always"],
		quotes: ["off"],
		"no-unused-vars": ["off", "always"]
	}
};
