import React from "react";
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Route, Link } from "react-router-dom";
import './Report.css';

import 'react-datepicker/dist/react-datepicker.css';

const data = [
  {name: moment().format('MM/DD'), nps: 20, ans: 1000, total: 2400},
  {name: moment().add(1, 'd').format('MM/DD'), nps: 80, ans: 800, total: 2210},
  {name: moment().add(2, 'd').format('MM/DD'), nps: 65, ans: 600, total: 2290},
  {name: moment().add(3, 'd').format('MM/DD'), nps: -10, ans: 400, total: 2000},
  {name: moment().add(4, 'd').format('MM/DD'), nps: -80, ans: 380, total: 2181},
  {name: moment().add(5, 'd').format('MM/DD'), nps: 30, ans: 360, total: 2500},
  {name: moment().add(6, 'd').format('MM/DD'), nps: 90, ans: 340, total: 2100},
];

const data2 = [
  {name: '1星', man: 200, woman: 200},
  {name: '2星', man: 121, woman: 100},
  {name: '2星', man: 100, woman: 121},
  {name: '3星', man: 100, woman: 129},
  {name: '4星', man: 50, woman: 150},
  {name: '5星', man: 200, woman: 81},
  {name: '6星', man: 400, woman: 100},
  {name: '7星', man: 75, woman: 25},
  {name: '8星', man: 151, woman: 30},
  {name: '9星', man: 2000, woman: 500},
  {name: '10星', man: 1400, woman: 700},
];

const Report = ({ match, startDate, endDate, handleChangeStart, handleChangeEnd }) => (
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
        {/* For Davis */}
      </Row>
      <Row>
        <Col xsOffset={8} xs={1}>
          Start:
          <DatePicker
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={handleChangeStart}
          />
        </Col>
        <Col xsOffset={1} xs={1}>
          End:
          <DatePicker
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            onChange={handleChangeEnd}
          />
        </Col>
      </Row>
      <Row>
        <Col xs="6" style={{ padding: '10px' }}>
          <h3>NPS Answer Report</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data2}
                  margin={{top: 20, right: 30, left: 20, bottom: 5}}>
             <CartesianGrid strokeDasharray="3 3"/>
             <XAxis dataKey="name"/>
             <YAxis label={{ value: '人', position: 'insideBottom' }}/>
             <Tooltip/>
             <Legend />
             <Bar dataKey="man" stackId="a" fill="#8884d8" />
             <Bar dataKey="woman" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
        <Col xs="6" style={{ padding: '10px' }}>
          <h3>放棄作答率</h3>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name"/>
              <YAxis label={{ value: '人', position: 'insideBottom' }}/>
              <Tooltip/>
              <Legend />
                <Area type='monotone' dataKey='ans' stackId="1" stroke='#8884d8' fill='#8884d8' />
                <Area type='monotone' dataKey='total' stackId="1" stroke='#ffc658' fill='#ffc658' />
            </AreaChart>
          </ResponsiveContainer>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <h3>NPS分數</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
              <YAxis unit="%"/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="nps" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
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
