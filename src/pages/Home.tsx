import * as React from "react";
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
            </div>
        )
    }
}


export default Home;