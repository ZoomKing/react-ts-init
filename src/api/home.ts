import Axios from '../utils/request';

interface GetHomeData {
    positionId: number ;
    pageSize: number ;
    currentPage: number ;
}


export default {
    getHomeData: (obj: GetHomeData)=>Axios.get('/h5/ads/query',obj)
}