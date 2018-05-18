import React from "react";
import moment from 'moment';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Route, Link } from "react-router-dom";
import './Report.css';

const data = [
  {name: moment().format('MM/DD'), nps: 20, pv: 1000, amt: 2400},
  {name: moment().add(1, 'd').format('MM/DD'), nps: 80, pv: 800, amt: 2210},
  {name: moment().add(2, 'd').format('MM/DD'), nps: 65, pv: 600, amt: 2290},
  {name: moment().add(3, 'd').format('MM/DD'), nps: -10, pv: 400, amt: 2000},
  {name: moment().add(4, 'd').format('MM/DD'), nps: -80, pv: 380, amt: 2181},
  {name: moment().add(5, 'd').format('MM/DD'), nps: 30, pv: 360, amt: 2500},
  {name: moment().add(6, 'd').format('MM/DD'), nps: 90, pv: 340, amt: 2100},
];

const Report = ({ match }) => (
  <Row>
    <Col xs={2}>
      <Nav bsStyle="pills" stacked activeKey={1}>
        <NavItem eventKey={1} href="report">
          VIVEPORT Subscription NPS
        </NavItem>
        <NavItem eventKey={2} disabled>
          NPS問卷調查 (Taiwan)
        </NavItem>
        <NavItem eventKey={3} disabled>
          NPS問卷調查 (US)
        </NavItem>
        <NavItem eventKey={4} disabled>
          NPS問卷調查 (UK)
        </NavItem>
        <NavItem eventKey={5} disabled>
          NPS問卷調查 (China)
        </NavItem>
      </Nav>
    </Col>
    <Col xs={10}>
      <Row>
        <Col xs="6" style={{ padding: '10px' }}>
          <h3>NPS分數</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
              <YAxis/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="nps" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
          </ResponsiveContainer>
        </Col>
        <Col xs="6" style={{ padding: '10px' }}>
          <h3>放棄作答率</h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Legend />
              <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            </AreaChart>
          </ResponsiveContainer>
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <h3>NPS Report</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}
                  margin={{top: 20, right: 30, left: 20, bottom: 5}}>
             <CartesianGrid strokeDasharray="3 3"/>
             <XAxis dataKey="name"/>
             <YAxis/>
             <Tooltip/>
             <Legend />
             <Bar dataKey="amt" stackId="a" fill="#8884d8" />
             <Bar dataKey="pv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
        <Col>
        </Col>
      </Row>
    </Col>
  </Row>
);

const AdminContent = ({ match }) => (
  <div>
  </div>
);

export default Report;
