import * as React from "react";
import HomeTop from './HomeComponent/HomeTop'
import HomeTitle from './HomeComponent/HomeTitle'
import './Home.scss';
interface IProps {
    name : string
}

class Home extends React.Component<IProps> {

    componentDidMount() {

    }

    async getAds() {
        
    }

    componentWillMount() {

    }
    public render() {
        return (
            <div className='Home'>
                <div className="hello">sauron</div>
                <HomeTop>
                    <HomeTitle />
                </HomeTop>
            </div>
        )
    }
}


export default Home;