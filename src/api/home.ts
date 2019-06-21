import generalRequestAPI, { ResultParam,} from '../utils/request';


interface GetHomeDataParams {
    positionId: number ;
    pageSize: number ;
    currentPage: number ;
}
interface Item {
    data: string;
    templateId: number;
}
interface OutHomeDataParams extends ResultParam{
    value: {
        pageCount: number;
        totalCount: number;
        values: Item[]
    }
}
interface GerUserInfoParams {
    id: number;
}
export default {
    getHomeData: generalRequestAPI<GetHomeDataParams, OutHomeDataParams>('get','/h5/ads/query'),
    getUser: generalRequestAPI<GerUserInfoParams, ResultParam>('get','/userInfo'),
}