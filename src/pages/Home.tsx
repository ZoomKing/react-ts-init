import * as React from "react";
import './Home.scss';
import api from '../api';
interface IProps {
    name : string
}


class Home extends React.Component<IProps> {

    componentDidMount() {
        console.log('home componentDidMount')
    }

    async getAds() {
        console.log('getAds');
        const response = await api.home.getHomeData({
            positionId: 6,
            pageSize: 100,
            currentPage: 1
        })
        console.log(response);
    }

    componentWillMount() {
        // this.getAds();
    }
    public render() {
        return (
            <div className='Home'>
                <div className="hello">sauron</div>
            </div>
        )
    }
}


export default Home;