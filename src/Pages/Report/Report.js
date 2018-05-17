import React from "react";
import { Route, Link } from "react-router-dom";
import './Report.css';

const Report = ({ match }) => (
  <div>
    <h2>
      <Link className="adminLink" to={match.url}>Report</Link>
    </h2>
    <ul>
      <li>
        <Link to={`${match.url}/target`}>Target</Link>
      </li>
      <li>
        <Link to={`${match.url}/questions`}>Questions</Link>
      </li>
      <li>
        <Link to={`${match.url}/confirm`}>Confirm</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:id`} component={AdminContent} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Welcome To Our Service, You Can Survey Anything, And What you Want.</h3>}
    />
  </div>
);

const AdminContent = ({ match }) => (
  <div>
    <h3>{match.params.id}</h3>
  </div>
);

export default Report;
