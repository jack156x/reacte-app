/*不包含业务的工具类
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-18 10:50:56 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-06-03 20:42:46
 */

/**
 *复制数据到剪切板
 * @param {String} str 需要复制的字符串内容
 * @returns 返回执行状态，一切正常，返回true
 */
export function copyToClipboard(str){
    const input = document.createElement('input');
    input.value = str;
    document.body.appendChild(input);
    input.select();
    document.execCommand("Copy");
    document.body.removeChild(input);
    return true;
}


/**
 *切换浏览器全屏
 *
 * @export
 * @param { Boolean } isFull 是否全屏
 */
export function toggleFullscreen(isFull){
	const ele = document.documentElement;

	if (isFull) {
		if (ele.requestFullscreen) {
			ele.requestFullscreen();
		} else if (ele.webkitRequestFullScreen) {
			ele.webkitRequestFullScreen();
		} else if (ele.mozRequestFullScreen) {
			ele.mozRequestFullScreen();
		} else if (ele.msRequestFullscreen) {
			// IE11
			ele.msRequestFullscreen();
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}
}

/**
 *等待指定时间后执行then方法
 * @export
 * @param {Number} duration 需要等待的毫秒数
 * @returns
 */
export async function waitFor(duration=1000){
	return new Promise((resolve)=>setTimeout(resolve, duration));
}