import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SurveyNPS from './Pages/SurveyNPS/SurveyNPS';
import SurveyMultiple from './Pages/SurveyMultiple/SurveyMultiple';
import Admin from './Pages/Admin/Admin';
import Report from './Pages/Report/Report';

const router = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Admin} />
      <Route path="/report" component={Report} />
      <Route path="/nps" component={SurveyNPS} />
      <Route path="/multiple" component={SurveyMultiple} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Survey Anything</h2>
  </div>
);

export default router;
