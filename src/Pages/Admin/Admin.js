import React from "react";
import { Route, Link } from "react-router-dom";
import './Admin.css';
import AdminHome from './AdminHome';
import AdminContent from '../AdminContent/AdminContent';

const Admin = ({ match, location }) => (
  <div>
    {
      (() => {
        console.log(match);
        console.log(location);
      })()
    }
    <div className="header">
      <h2 className="logo">
        <Link className="adminLink" to={match.url}>Survey Anything</Link>
      </h2>
      <ul className="header-tab">
        <li>
          <Link
            to={`${match.url}/target`}
            className={location.pathname === `${match.url}/target` ? 'active' : 'link'}
          >
            Target
          </Link>
        </li>
        <li>
          <Link
            to={`${match.url}/questions`}
            className={location.pathname === `${match.url}/questions` ? 'active' : 'link'}
          >
            Questions
          </Link>
        </li>
        <li>
          <Link
            to={`${match.url}/confirm`}
            className={location.pathname === `${match.url}/confirm` ? 'active' : 'link'}
          >
            Confirm
          </Link>
        </li>
        <li>
          <Link
            to={`${match.url}/report`}
            className={location.pathname === `${match.url}/report` ? 'active' : 'link'}
          >
            Report
          </Link>
        </li>
      </ul>
    </div>
    <Route path={`${match.url}/:id`} component={AdminContent} />
    <Route
      exact
      path={match.url}
      render={() => <AdminHome />}
    />
  </div>
);

export default Admin;