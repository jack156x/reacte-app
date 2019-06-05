/*日志核心
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-20 18:29:23 
 * @Last Modified by:   zzh0211@live.com 
 * @Last Modified time: 2019-05-20 18:29:23 
 */
import Logger from 'js-logger'
import Vue from 'vue'
import moment from 'moment'

Logger.useDefaults({
	defaultLevel: process.env.NODE_ENV == 'production' ? Logger.ERROR : Logger.DEBUG,
	formatter: function (messages, context) {
		// prefix each log message with a timestamp.
		messages.unshift(moment().format('A HH:mm:ss'))
	}
});

Vue.prototype.$logger = Logger;

export default Logger;
