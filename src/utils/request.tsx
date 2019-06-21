import axios, { AxiosError, AxiosResponse } from 'axios';
export interface APIParams {

}
export  interface ResultParam {
    succ : boolean;
    errorCode: null | number;
}

type APIMethod = "post" | "get" | 'delete' | 'put';

// if (process.env.NODE_ENV === "product" && process.env.VUE_APP_CURRENTMODE === 'daily') {
    // axios.defaults.baseURL = 'https://daily.pinkumall.com/';
// } else if (process.env.NODE_ENV === 'product' ) {
    // axios.defaults.baseURL = 'https://www.pinkumall.com/';
// }

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config);
    
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
    public _checkStatus(response: AxiosResponse) {
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
    public _checkCode(error: AxiosError) {
        const errRes = error.response as AxiosResponse
        // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
        if (errRes.status === 404) {
            console.log('Not Found');
        } else if (errRes.data && (!errRes.data.success)) {
            alert(errRes.data.message);
        }
        return error;
    }
}

class AxiosApi {
    private _Check: any;
    constructor() {
        this._Check = new Check();
    }
    public request(method: APIMethod, url: string, params: any = null) {
        const options = method==='get' ? {params} : {data:params}
        return axios({
            method,
            url,
            ...options,
        }).then(
            (response: AxiosResponse) => {
                return this._Check._checkStatus(response);
            }
        ).catch(
            (error: AxiosError) => {
                return this._Check._checkCode(error);
            }
        );
    }
}

//generalRequestAPI 不用解释，只是一个函数名

// <InputParams extends APIParams, OutParams extends ResultParam> 
// 这个是泛型的写法，接受两个未知类型，一个 InputParams 一个  OutParams
// InputParams 继承  APIParams； OutParams 继承 ResultParam

// (method: APIMethod, url: string)
// 简单的两个参数 和类型

// : (params: InputParams)=> Promise<OutParams>
// : 后面是 这个函数的返回类型 返回的是一个 函数，
// 函数接受一个 参数，类型是 InputParams 函数 return 结果是 一个Promiseh函数，泛型是OutParams 这一点和 generalRequestAPI 一样

// return (params: InputParams)=> new Axios().request(method,url,params) 
// 这个就是 函数 generalRequestAPI 返回结果了 
export default function generalRequestAPI<InputParams extends APIParams, OutParams extends ResultParam>(method: APIMethod, url: string): (params: InputParams)=> Promise<OutParams>{
    return (params: InputParams)=> new AxiosApi().request(method,url,params) 
}
