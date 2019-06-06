
import axios from 'axios';

const TOKEN_KEY = 'token';

//http request 拦截器
axios.interceptors.request.use(
    config => {
		const { [TOKEN_KEY]:token } = sessionStorage;
		
		config.headers.Authorization = `JWT ${ token }`;
		return config;
    },
    error => {
        return Promise.reject(err);
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
        // if (response.data.errCode == 2) {
        //     router.push({
        //         path: "/login",
        //         querry: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
        //     })
        // }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)

function core(method, url, data, urlData){
    // 适配请求参数
    if (method == 'get') {
        data = {
            params: data
        };
    }

    //url地址上增加参数
    if (urlData) {
        for (const k in urlData) {
            url += (url.indexOf('?') < 0 ? '?' : '&') + k +'='+urlData[k];
        }
    }

    // 如果各个配置文件中没有配置host，读取默认host设置
    // let url = CONFIG.HOSTS[CONFIG.ENVIRONMENT] + url;
    url = `/v1/agent/${ url }`;

    return axios[method](url, data).then(res=>Object.assign(Object.create({ __raw__: res }), res.data));
}


const fetchs = Array.from(['get', 'post', 'patch', 'delete', 'put'], type=>core.bind(null, type));

export const [get, post, patch, del, put] = fetchs;

export default {
    get,
    post,
    patch,
    del,
    put,
};

