import React from "react";
import { Route, Link } from "react-router-dom";
import './Admin.css';
import AdminHome from './AdminHome';
import AdminContent from '../AdminContent/AdminContent';

const Admin = ({ match, location }) => (
  <div>
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
            目標對象
          </Link>
        </li>
        <li>
          <Link
            to={`${match.url}/questions`}
            className={location.pathname === `${match.url}/questions` ? 'active' : 'link'}
          >
            您的問卷
          </Link>
        </li>
        <li>
          <Link
            to={`${match.url}/confirm`}
            className={location.pathname === `${match.url}/confirm` ? 'active' : 'link'}
          >
            確認並啟用調查
          </Link>
        </li>
        <li>
          <Link
            to={`${match.url}/report`}
            className={location.pathname === `${match.url}/report` ? 'active' : 'link'}
          >
            報表
          </Link>
        </li>
      </ul>
      <div className="user">
        <img className="photo" src="https://cdn.dribbble.com/assets/avatar-default-aa2eab7684294781f93bc99ad394a0eb3249c5768c21390163c9f55ea8ef83a4.gif"/>
        <span>Davis Chang</span>
      </div>
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
