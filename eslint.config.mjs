// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single', { 'avoidEscape': true }],
		'semi': ['error', 'always'],
		'eol-last': ['error', 'always'],
		'vue/html-indent': ['error', 'tab'],
		'vue/html-quotes': ['error', 'double'],
		'vue/max-attributes-per-line': ['error', {
			'singleline': 3,
			'multiline': 1
		}],
		'vue/html-closing-bracket-newline': ['error', {
			'singleline': 'never',
			'multiline': 'always'
		}]
	}
});
