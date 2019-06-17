import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import users from './users'


var mock = new MockAdapter(axios);


export default function mockApi(errConfig: AxiosRequestConfig) {
    if(errConfig.method === 'get'){
        switch(errConfig.url) {
            case "/userInfo":
                mock.onGet(errConfig.url).reply(200, users);
            break;
            default: 
                console.log("Not Found")
            break;
        }
    } else if(errConfig.method === 'post'){
        switch(errConfig.url) {
            
        }
    }
}