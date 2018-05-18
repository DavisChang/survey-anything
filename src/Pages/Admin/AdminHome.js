import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AdminHome extends Component {

  renderData = () => {
    const { data } = this.props;
    if (data && data.surveyName) {
      return (
        <tr>
          <td>{data.surveyName}</td>
          <td className="ing">正在收集回覆</td>
          <td>2018年5月18日</td>
          <td>2018年5月18日</td>
          <td>未排定時間</td>
          <td></td>
        </tr>
      );
    }
  };

  render() {
    return(
      <div className="AdminHome">
        <h1 className="title">所有問卷調查</h1>
        <div className="survey-table">
          <table>
            <thead>
              <tr>
                <th>問卷調查</th>
                <th>狀態</th>
                <th>建立時間</th>
                <th>上次進行時間</th>
                <th>下次進行時間</th>
                <th>
                  <Link to="/admin/target"><span className="close rounded"/></Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.renderData()}
              <tr>
                <td>NPS問卷調查 (UK)</td>
                <td className="ing">正在收集回覆</td>
                <td>2018年5月18日</td>
                <td>2018年5月18日</td>
                <td>未排定時間</td>
                <td></td>
              </tr>
              <tr>
                <td>NPS問卷調查 (Taiwan)</td>
                <td>未進行</td>
                <td>2018年5月17日</td>
                <td>尚未進行</td>
                <td>未排定時間</td>
                <td></td>
              </tr>
              <tr>
                <td>NPS問卷調查 (US)</td>
                <td>完成</td>
                <td>2018年5月17日</td>
                <td>2018年5月17日</td>
                <td>未排定時間</td>
                <td></td>
              </tr>
              <tr>
                <td>NPS問卷調查 (China)</td>
                <td>已暫停</td>
                <td>2018年5月17日</td>
                <td>2018年5月17日</td>
                <td>未排定時間</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AdminHome;
