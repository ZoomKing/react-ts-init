import * as React from 'react';
import { Link, Route } from "react-router-dom";
interface IProps {
    match : any
}

class Topics extends React.Component<IProps> {
    public render(){
        console.log(this.props);
        const {match} =  this.props;
        console.log(match);
        return(
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>

                <Route path={`${match.path}/:topicId`} component={Topic} />
                <Route
                    exac={true}
                    path={match.path}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        )
    }
}


function Topic({ match }: { match: any}) {
    return (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }
  
export default Topics;