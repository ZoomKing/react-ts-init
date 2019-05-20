import { SET_USERINFO } from '../constans/userInfo';

export interface IUserInfo {
    age ?: number ;
    name ?: string ;
}
interface IUserInfoAction {
    type : string; 
    info : IUserInfo;
}
const UserInfo : IUserInfo = {
    age : 0 ,
    name : 'sauron'
}

export function userInfo(state = UserInfo, actions: IUserInfoAction) {
    switch (actions.type) {
        case SET_USERINFO :
            return Object.assign({},state,actions.info);
        default :
        return state;
    }
}