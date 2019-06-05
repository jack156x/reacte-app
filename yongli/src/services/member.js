/*会员模块
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-21 10:01:37 
 * @Last Modified by: mikey.glmay
 * @Last Modified time: 2019-06-05 16:47:13
 */
import logger from '@/logger'
import {
    get,
    post,
    patch,
    del,
} from "@/core";

/**
 * 修改会员信息
 * 
 */
export async function patchMemberCount(params) {
    return patch({
        key: 'member.memberInfo',
        rest: params.id,
    }, params);
}

/***
 * 添加为异常会员
 * * */
export async function addExceptionMember(params) {
    return patch('member.memberInfo', params, {
        whether_odd: 1,
    })
}

/**
 * 获取组别下拉项
 * 
 */
export async function getMemberGroup() {
    return get('member.accountgroup');
}
/**
 * 会员解锁
 * 
 */
export async function memberwhether_lock(params) {
    return get('member.whether_lock', params);
}
/******通过查询账号获取会员信息******* */
export async function getMemberInfoDt(params) {
    return get('member.memberInfo', params)
}
/*****资金回收 */
export async function moneyrakeback(params) {
    return get('member.moneyrakeback', params)
}
/****修改会员密码 */
export async function resetPass(params) {
    return patch('member.resetpassword', params)
}

/***调整组别 或者批量转移 */
export async function changegroup(params) {
    return post('member.changegroup', params)
}

/**patch会员分组 */
function patchGroup(id, params) {
    return patch({
        key: 'member.accountgroup',
        rest: id,
    }, params);
}

/**修改分组信息 */
export async function modifyGroup(params) {
    return patchGroup(params.id, params);
}

/**创建新的会员分组 */
export async function addGroup(params) {
    return post('member.accountgroup', params);
}

/**设置默认分组 */
export async function setDefaultGroup(group_id){
    return get({
        key: 'member.accountgroup',
        rest: 'changegroupisdefault',
    }, {
        group_id,
    });
}

/**删除分组 */
export async function deleteGroup(id) {
    return del({
        key: 'member.accountgroup',
        rest: id,
    });
}

/**分组绑定代理 */
export async function groupBindAgent(id, owner) {
    return patchGroup(id, {
        owner,
    }).then(res => res).catch(err => {
        logger.error('会员分组绑定代理失败：', err);
        return false;
    });
}

/**修改会员 */
export async function modifyMember(params) {
    return patch('member.resetrealname', params)
}

/***新增会员银行卡 */
export async function addMemberBindAccount(params) {
    return post('member.card', params)
}

/**删除会员 */
export async function deleteMember(id, params) {
    return patch({
        key: 'member.memberInfo',
        rest: id,
    }, params);
}

/**修改会员其它信息 */
export async function modifyOtherText(id, params) {
    return patch({
        key: 'member.memberInfo',
        rest: id,
    }, params);
}