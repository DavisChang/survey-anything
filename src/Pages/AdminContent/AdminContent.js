import React, { Component } from 'react';
import Report from '../Report/Report';
import { FormControl, Checkbox, FormGroup, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import './AdminContent.css';
import { Link } from "react-router-dom";

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

class AdminContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: '123',
      surveyName: '',
      urlPath: '',
    };
  }

  onChangeUrlPath = event => {
    this.setState({
      urlPath: event.target.value,
    });
  };

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
                <FormControl type="text" placeholder="VIVEPORT Subscription NPS" onChange={this.onChangeSurveyName} value={this.state.surveyName} />
              </div>
              <div className="target-survey-control">
                <div className="target-survey-control-block">
                  <p>目標群眾</p>
                  <div>
                    <Checkbox>Web</Checkbox>
                    <Checkbox>AIO Device</Checkbox>
                    <Checkbox>VIVE Device</Checkbox>
                    <Checkbox>PC Client</Checkbox>
                    <Checkbox>MAC Client</Checkbox>
                    <Checkbox>In VR Content</Checkbox>
                  </div>
                </div>
                <div className="target-survey-control-block">
                  <p>條件：</p>
                  <div>
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>國家</ControlLabel>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="TW">Taiwan</option>
                        <option value="US">United States</option>
                        <option value="CN">China</option>
                        <option value="UK">United Kingdom</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>性別</ControlLabel>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="m">男性</option>
                        <option value="w">女性</option>
                      </FormControl>
                    </FormGroup>
                  </div>
                </div>
                <div className="target-survey-control-block">
                  <p>其他設定：</p>
                  <div>
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>URL Path</ControlLabel>
                      <FormControl type="text" placeholder="/subscriptions/:SubID" onChange={this.onChangeUrlPath} value={this.state.urlPath} />
                    </FormGroup>
                    <FieldGroup
                      id="formControlsFile"
                      type="file"
                      label="客製化"
                      help="Example block-level help text here."
                    />
                  </div>
                </div>
              </div>
              <div className="target-survey-title">
                <Button>
                  <Link to="/admin">返回</Link>
                </Button>
                <Button bsStyle="success"><Link to="/admin/questions">下一步</Link></Button>
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
            <Report />
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
