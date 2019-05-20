import axios from 'axios';


console.log(process.env);
// if (process.env.NODE_ENV === "product" && process.env.VUE_APP_CURRENTMODE === 'daily') {
    // axios.defaults.baseURL = 'https://daily.pinkumall.com/';
// } else if (process.env.NODE_ENV === 'product' ) {
    // axios.defaults.baseURL = 'https://www.pinkumall.com/';
// }

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

class Check {
    public _checkStatus(response: any) {
        // 如果http状态码正常，则直接返回数据
        if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
            if (response.data.succ) {
                return response.data;
            } else {
                return response.data;
            }
        }
        // 异常状态下，把错误信息返回去
        return {
            status: response.status,
            msg: '异常'
        };
    }
    public _checkCode(error: any) {
        // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
        if (error.status === -404) {
            alert(error.msg);
        }
        if (error.data && (!error.data.success)) {
            alert(error.data.error_msg);
        }
        return error;
    }
}

class Axios {
    private _Check: any;
    constructor() {
        this._Check = new Check();
    }
    public get(url: string, params: any = null) {
        return axios({
            url,
            params,
        }).then(
            (response: any) => {
                return this._Check._checkStatus(response);
            }
        ).catch(
            (error: any) => {
                return this._Check._checkCode(error);
            }
        );
    }
    public post(url: string, data: any = null) {
        return axios({
            method: 'post',
            url,
            data,
            //   headers: {
            //     'X-Requested-With': 'XMLHttpRequest',
            //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            //   }
        }).then(
            (response) => {
                return this._Check._checkStatus(response);
            },
        ).then(
            (error) => {
                return this._Check._checkCode(error);
            },
        );
    }
}

export default new Axios();