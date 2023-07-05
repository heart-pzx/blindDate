module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"plugin:prettier/recommended"
	],
	parserOptions: {
		ecmaVersion: 2020,
		// 使用空格缩
		useTabs: true,
		// 指定每个缩进级别的空格数
		tabWidth: 2,
		// 一行最多多少个字符
		printWidth: 100,
		// 使用双引号
		singleQuote: false,
		// 在语句末尾打印分号
		semi: true,
		// 换行符使用 auto 结尾是 可选值"<auto|lf|crlf|cr>"
		endOfLine: "crlf",
		// 没有尾随逗号
		trailingComma: "none"
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
	}
};
