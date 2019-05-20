import * as React  from "react";
import { BrowserRouter as Router , Link} from "react-router-dom";
import RouterMap from './router/RouterMap';
import './App.scss';
function BasicExample() {

  return (
    <Router>
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
        </ul>

        <hr />
        <RouterMap />
    </Router>
  );
}



export default BasicExample;