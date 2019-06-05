/* 左侧菜单栏配置项
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-20 17:51:20 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-21 18:23:41
 */

import _ from 'lodash/string'

let menus = (() => {
	return [{
		name: '会员管理',
		path: 'member',
		icon: 'user',
		children: [{
			name: '会员信息管理',
			path: 'info',
		}, {
			name: '会员账户核查',
			path: 'account',
		}, {
			name: '关键信息管理',
			path: 'keyinfo',
		}, {
			name: '会员分组管理',
			path: 'group',
		}, {
			name: '会员资料管理',
			path: 'data',
		}, {
			name: '会员报表统计',
			path: 'report',
		}, {
			name: '会员日志管理',
			path: 'log',
		}, {
			name: '会员卡片管理',
			path: 'card',
		}, {
			name: '黑名单管理',
			path: 'blacklist',
		}, ]
	}, {
		name: '财务管理',
		path: 'finance',
		icon: 'dollar',
		children: [{
			name: '加减款操作',
			path: 'addandsubtract'
		},{
			name: '填单存款管理',
			path: 'deposit'
		},{
			name: '在线存款管理',
			path: 'onlinedeposit'
		},{
			name: '提款申请管理',
			path: 'withdraw'
		},{
			name: '会员资金管理',
			path: 'fund'
		},{
			name: '额度转换管理',
			path: 'transform'
		},{
			name: '收支财务总汇',
			path: 'summarizing'
		},]
	}, {
		name: '返水管理',
		path: 'rakeback',
		icon: 'group',
		children: [{
			name: '会员返水设置',
			path: 'settings',
		}, {
			name: '会员返水信息',
			path: 'info',
		}]
	}].map((v, i)=> {
		const {
			path,
			children,
		} = v;
		if (children) {
			for (const sub of children) {
				sub.path = _.upperFirst(path) + _.upperFirst(sub.path);
			}
		}

		return v;
	});
})();

export default menus;