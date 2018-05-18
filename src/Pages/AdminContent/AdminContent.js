import React, { Component } from 'react';
import './AdminContent.css';

class AdminContent extends Component {

  render() {
    console.log('AdminContent:', this.props);

    switch(this.props.match.params.id) {
      case 'target':
        return (
          <div className="AdminContent">
            <h1 className="title">Target</h1>
          </div>
        );
      case 'questions':
        return (
          <div className="AdminContent">
            <h1 className="title">Questions</h1>
          </div>
        );
      case 'confirm':
        return (
          <div className="AdminContent">
            <h1 className="title">Confirm</h1>
          </div>
        );
      default:
        return (
          <div className="AdminContent">
            <h1 className="title">{this.props.match.params.id}</h1>
          </div>
        );
    }
  }
}

export default AdminContent;
