import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SetUserInfo  from '../actions/userInfo'
import { IUserInfo } from '../reducers/setUserInfo';
import api from '../api';

interface IComponentStateProps  {
    userInfo: IUserInfo;
}
interface IComponentDispatchProps {
    onChange : (val: any)=>void;
}

interface IProps extends IComponentStateProps,IComponentDispatchProps {
}

class About extends React.Component<IProps> {
    public constructor (props: any) {
        super(props);
        this.setName = this.setName.bind(this);
    }
    public setName () {
        this.getAds();
    }
    public async getAds() {

        const response = await api.home.getHomeData({
            positionId: 6,
            pageSize: 100,
            currentPage: 1
        })
        console.log(response.value.values[0])
        this.props.onChange({
            age: response.value.totalCount,
            name: 'xingyao',
        })
    }
    componentWillMount() {
        this.setName();
    }
    public render() {
        const { userInfo } = this.props;
        return(
            <div>
                <div>this is about</div>
                <p>{ userInfo.name }</p>
                <p>{ userInfo.age }</p>
                <div onClick={this.setName}>set Name</div>
            </div>
        ) 
    }
}

const mapStateToProps = (state : any) => {
    return state
  }
const mapDispatchToProps = (dispatch : any) => {
    return bindActionCreators({onChange: SetUserInfo}, dispatch);
  }

export default connect(mapStateToProps,mapDispatchToProps)(About);