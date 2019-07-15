import * as React  from "react";
import { BrowserRouter as Router , Link} from "react-router-dom";
import RouterMap from './router/RouterMap';
import './App.scss';

export default class BasicExample extends React.Component {
  render() {
    return (
      <Router >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
  
          <hr />
          <RouterMap />
      </Router>
    );
  }
}