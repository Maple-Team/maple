'use strict'
/**
 * prettier config
 * @type {import ('prettier').Config}
 */
module.exports = {
	semi: true,
	singleQuote: false,
	trailingComma: 'es5',
	tabWidth: 2,
	jsxSingleQuote: true,
	endOfLine: 'lf',
  /**
   * Include parentheses around a sole arrow function parameter单箭头参数.
   */
	arrowParens: 'avoid',
	vueIndentScriptAndStyle: true,
	useTabs: true,
	printWidth: 120,
	bracketSpacing: true,
}
