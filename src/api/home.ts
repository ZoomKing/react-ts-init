import generalRequestAPI, { ResultParam, APIParams} from '../utils/request';


interface GetHomeDataParams {
    positionId: number ;
    pageSize: number ;
    currentPage: number ;
}
interface Item {
    data: string;
    templateId: number;
}
interface OutParams extends ResultParam{
    value: {
        pageCount: number;
        totalCount: number;
        values: Item[]
    }
}
export default {
    getHomeData: generalRequestAPI<GetHomeDataParams, OutParams>('get','/h5/ads/query'),
    getUser: generalRequestAPI<APIParams, OutParams>('get','/h5/ads/query')
}