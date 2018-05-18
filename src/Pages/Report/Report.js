import React from "react";
import moment from 'moment';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Row, Col } from 'react-bootstrap';
import { Route, Link } from "react-router-dom";
import './Report.css';

const data = [
  {name: moment().format('MM/DD'), nps: 4000, pv: 2400, amt: 2400},
  {name: moment().add(1, 'd').format('MM/DD'), nps: 3000, pv: 1398, amt: 2210},
  {name: moment().add(2, 'd').format('MM/DD'), nps: 2000, pv: 9800, amt: 2290},
  {name: moment().add(3, 'd').format('MM/DD'), nps: 2780, pv: 3908, amt: 2000},
  {name: moment().add(4, 'd').format('MM/DD'), nps: 1890, pv: 4800, amt: 2181},
  {name: moment().add(5, 'd').format('MM/DD'), nps: 2390, pv: 3800, amt: 2500},
  {name: moment().add(6, 'd').format('MM/DD'), nps: 3490, pv: 4300, amt: 2100},
];

const Report = ({ match }) => (
  <div style={{ borderTop: '1px solid #ddd' }}>
    <Row>
      <Col xs="6" style={{ padding: '10px' }}>
        <h3>NPS Report</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name" padding={{left: 30, right: 30}}/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="nps" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Col>
      <Col xs="6" style={{ padding: '10px' }}>
        <h3>NPS Report</h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Area type='monotone' dataKey='nps' stackId="1" stroke='#8884d8' fill='#8884d8' />
            <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
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
           <Bar dataKey="nps" stackId="a" fill="#8884d8" />
           <Bar dataKey="pv" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Col>
      <Col>
      </Col>
    </Row>
  </div>
);

const AdminContent = ({ match }) => (
  <div>
  </div>
);

export default Report;
