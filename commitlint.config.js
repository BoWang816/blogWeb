/**
 * commitlint.config.js.js
 * @author wangbo
 * @since 2020/4/7
 * @github https://github.com/BoWang816
 */
module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'docs', // 文档
				'feat', // 新功能
				'fix', // bug
				'chore', // 构建过程或辅助工具的变动
				'refactor', // 重构
				'revert', // 回退
				'style', // 样式
				'test', // 测试
			],
		],
		'type-case': [0, 'always'], // 提交类型
		'type-empty': [0], // 提交类型不能为空
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'], // 提交信息格式
		'subject-empty': [0, 'never'], // 提交信息不能为空
		'header-max-length': [0, 'always', 72],
	},
};
