/**
 * commitlint.config.js.js
 * @author wangbo
 * @since 2020/4/7
 * @github https://github.com/BoWang816
 */
module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [2, 'always',
			[
				'build',
				'ci',
				'chore',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test'
			],
		],
		'type-case': [0, 'always'], // 提交类型
		'type-empty': [0], // 提交类型不能为空
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'], // 提交信息格式
		'subject-empty': [0, 'never'], // 提交信息不能为空
		'header-max-length': [0, 'always', 72]
	}
};
