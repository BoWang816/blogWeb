/**
 * common.js
 * @author wangbo
 * @since 2020/3/24
 * @github https://github.com/BoWang816
 */
const menuList = [{
	title: '淘宝权益',
	key: '/taobao',
	children: [{
		title: '朝阳区',
		key: '/beijing/chaoyang'
	}, {
		title: '海淀区',
		key: '/beijing/haidian'
	}]
}, {
	title: '线下权益',
	key: '/offline',
	children: [{
		title: '浦东区',
		key: '/shanghai/pudong'
	}, {
		title: '南京路',
		key: '/shanghai/nanjinglu'
	}]
}];

module.exports = {
	'/menu': {
		code: 'success',
		data: menuList,
		msg: ''
	}
};
