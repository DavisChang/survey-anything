import React, { Component } from 'react';
import './AdminContent.css';

class AdminContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: '123',
      surveyName: '',
    };
  }

  onChangeSurveyName = event => {
    this.setState({
      surveyName: event.target.value,
    });
  };

  render() {
    console.log('AdminContent props:', this.props);
    console.log('AdminContent state:', this.state);

    switch(this.props.match.params.id) {
      case 'target':
        return (
          <div className="AdminContent">
            <div className="target">
              <h1 className="title">Target</h1>
              <div className="target-survey-title">
                <p>問卷名稱:</p>
                <input type="text" value={this.state.surveyName} onChange={this.onChangeSurveyName}/>
              </div>
            </div>
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
      case 'report':
        return (
          <div className="AdminContent">
            <h1 className="title">Report</h1>
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
