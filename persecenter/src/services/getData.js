import http from '@/utils/fetch'
/********patch put,post,fetch(get方法) */
/**
 * 获取搜索地址
 */
export const searchplace = ()=>http.get('pois', {
    type: 'search',
    city_id: 'cityid',
    keyword: 'value'
});


//  searchplace.then((res) => {
// 	if (res.code === ERR_OK) {
// 	  console.log(res.data)
// 	}
//   }, (err) => {
// 	console.log(err)
//   })
/**
 * 获取投注记录列表
 *
 **/
export const pageList = ()=>http.get('accounts', {})