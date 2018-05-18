import React, { Component } from 'react';
import Report from '../Report/Report';
import { FormControl, Checkbox, FormGroup, ControlLabel, HelpBlock, Button, Modal, Radio } from 'react-bootstrap';
import './AdminContent.css';
import { Link } from "react-router-dom";
import SurveyNPS from '../SurveyNPS/SurveyNPS';
import SurveyMultiple from '../SurveyMultiple/SurveyMultiple';

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
      surveyName: 'VIVEPORT Subscription NPS',
      urlPath: '/subscription/.*',
      demoUrl: 'http://localhost:3000/subscriptions/SB-444b63a6-125d-4c80-8260-0c44de486029',
      show: false,
      surveyType: 'nps', // nps, multiple
      QName: '推薦 VIVEPORT 訂閱',
      QDesc: '您有多大可能會相您的朋友推薦 VIVEPORT 訂閱呢？',
      QNegative: '不太滿意',
      QPositive: '非常願意',
    };
  }

  handleHide = () => {
    this.setState({ show: false });
  };

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

  renderQuestion = () => {

    if (this.state.surveyType === 'nps') {
      return (
        <SurveyNPS />
      );
    } else if(this.state.surveyType === 'multiple') {
      return (
        <SurveyMultiple />
      );
    } else {
      return (<div>none</div>);
    }
    
  }

  onChangeRadio = (event) => {
    this.setState({
      surveyType: event.target.name,
    });

  };

  onChangeQName = (event) => {
    this.setState({
      QName: event.target.value,
    });
  };

  onChangeQDesc = (event) => {
    this.setState({
      QDesc: event.target.value,
    });
  };
  onChangeQNegative = (event) => {
    this.setState({
      Negative: event.target.value,
    });
  };
  onChangeQPositive = (event) => {
    this.setState({
      QPositive: event.target.value,
    });
  };

  renderLeft = () => {
    if (this.state.surveyType === 'nps') {
      return (
        <div>
          <div className="target-survey-title">
            <p>問卷主題:</p>
            <FormControl type="text" placeholder="推薦 VIVEPORT 訂閱" onChange={this.onChangeQName} value={this.state.QName} />
          </div>
          <div className="target-survey-title">
            <p>問卷描述:</p>
            <FormControl type="text" placeholder="您有多大可能會相您的朋友推薦 VIVEPORT 訂閱呢？" onChange={this.onChangeQDesc} value={this.state.QDesc} />
          </div>
          <div className="target-survey-title">
            <p>反向說明:</p>
            <FormControl type="text" placeholder="不太滿意" onChange={this.onChangeQNegative} value={this.state.QNegative} />
          </div>
          <div className="target-survey-title">
            <p>正向說明:</p>
            <FormControl type="text" placeholder="非常願意" onChange={this.onChangeQPositive} value={this.state.QPositive} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="target-survey-title">
            <p>問卷主題:</p>
            <FormControl type="text" placeholder="請輸入問卷文字" onChange={this.onChangeQName} value="請輸入問卷文字" />
          </div>
          <div className="target-survey-title">
            <p>問卷描述:</p>
            <FormControl type="text" placeholder="請勾選所有合適的答案" onChange={this.onChangeQDesc} value="請勾選所有合適的答案" />
          </div>
        </div>
      );
    }
  };

  renderRight = () => {
    if (this.state.surveyType === 'nps') {
      return (
        <div>
          <SurveyNPS title={this.state.QName} desc={this.state.QDesc} left={this.state.QNegative} right={this.state.QPositive}/>
        </div>
      );
    } else {
      return (
        <div>
          <SurveyMultiple />
        </div>
      );
    }
  };

  render() {
    console.log('AdminContent props:', this.props);
    console.log('AdminContent state:', this.state);

    switch(this.props.match.params.id) {
      case 'target':
        return (
          <div className="AdminContent">
            <div className="target">
              <h1 className="title">目標對象</h1>
              <div className="target-survey-title">
                <p>問卷名稱:</p>
                <FormControl type="text" placeholder="VIVEPORT Subscription NPS" onChange={this.onChangeSurveyName} value={this.state.surveyName} />
              </div>
              <div className="target-survey-control">
                <div className="target-survey-control-block">
                  <p>目標群眾:</p>
                  <div>
                    <ControlLabel>用戶端</ControlLabel>
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
                        <option value="all">全部</option>
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
                      <ControlLabel>URL Path (Regular Expression)</ControlLabel>
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
                <Button bsStyle="primary"><Link to="/admin/questions">下一步</Link></Button>
              </div>
            </div>
          </div>
        );
      case 'questions':
        return (
          <div className="AdminContent">
            <h1 className="title">您的問卷</h1>
            <div className="target-survey-control">
              <div className="target-survey-control-block questions">
                <div style={{ position: 'relative' }}>
                  <div className="modal-container">
                    <Button
                      bsStyle="primary"
                      bsSize="small"
                      onClick={() => this.setState({ show: true })}
                    >
                      +
                    </Button>

                    <Modal
                      show={this.state.show}
                      onHide={this.handleHide}
                      container={this}
                      aria-labelledby="contained-modal-title"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                          選擇問卷樣式
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="block-top">
                          <FormGroup onChange={this.onChangeRadio}>
                            <Radio name="nps" inline checked={this.state.surveyType === 'nps'}>
                              分級量表
                            </Radio>
                            <Radio name="multiple" inline checked={this.state.surveyType === 'multiple'}>
                              複選
                            </Radio>
                            <Radio name="3" inline checked={this.state.surveyType === '3'}>
                              單選
                            </Radio>
                            <Radio name="4" inline checked={this.state.surveyType === '4'}>
                              自由作答
                            </Radio>
                            <Radio name="5" inline checked={this.state.surveyType === '5'}>
                              文字敘述分級量表
                            </Radio>
                            <Radio name="6" inline checked={this.state.surveyType === '6'}>
                              附圖自由作答
                            </Radio>
                          </FormGroup>
                        </div>
                        <div className="block-bottom">
                          {this.renderQuestion()}
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                  {this.renderLeft()}
                </div>
              </div>
              <div className="target-survey-control-block questions">
                <div>{this.renderRight()}</div>
              </div>
            </div>
            <div className="target-survey-title">
              <Button>
                <Link to="/admin/target">返回</Link>
              </Button>
              <Button bsStyle="primary"><Link to="/admin/confirm">下一步</Link></Button>
            </div>
          </div>
        );
      case 'confirm':
        return (
          <div className="AdminContent">
            <h1 className="title">確認並啟用調查</h1>
            <div className="target-survey-control confirm">
              <div className="target-survey-control-block confirm">
                <div className="confirm-block">
                  <p>詳細資料</p>
                  <p className="confirm-detail">
                    <b>問卷名稱:</b> <span>{this.state.surveyName}</span>
                  </p>
                </div>
                <div className="confirm-block">
                  <p>設定資料人員, 時間</p>
                  <p className="confirm-detail">
                    <b>人員:</b> <span>Davis Chang, {Date()}</span>
                  </p>
                </div>
                <div className="confirm-block">
                  <p>目標對象</p>
                  <p className="confirm-detail">
                    <b>群眾:</b> <span>Web, PC Client</span>
                  </p>
                </div>
                <div className="confirm-block">
                  <p>條件</p>
                  <p className="confirm-detail">
                    <b>國家:</b> <span>Taiwan</span>
                  </p>
                  <p className="confirm-detail">
                    <b>性別:</b> <span>全部</span>
                  </p>
                </div>
                <div className="confirm-block">
                  <p>其他設定</p>
                  <p className="confirm-detail">
                    <b>URL Path:</b> <span>{this.state.urlPath} (Regular Expression)</span>
                  </p>
                </div>
                <div className="confirm-block">
                  <p>問卷樣式</p>
                  <p className="confirm-detail">
                    <b>樣式:</b> <span>分級量表</span>
                  </p>
                </div>
                <div className="confirm-block">
                  <p>問卷</p>
                  <p className="confirm-detail">
                    <b>問卷主題:</b> <span>{this.state.QName}</span>
                  </p>
                  <p className="confirm-detail">
                    <b>問卷描述:</b> <span>{this.state.QDesc}</span>
                  </p>
                  <p className="confirm-detail">
                    <b>反向說明:</b> <span>{this.state.QNegative}</span>
                  </p>
                  <p className="confirm-detail">
                    <b>反向說明:</b> <span>{this.state.QPositive}</span>
                  </p>
                </div>
              </div>
              <div className="target-survey-title">
                <Button>
                  <Link to="/admin/questions">返回</Link>
                </Button>
                <Button bsStyle="primary">
                  <Link to="/admin/start">開始問卷</Link>
                </Button>
                <p className="help">如需協助或想瞭解進一步瞭解，請與我們小組聯絡。</p>
              </div>
            </div>
          </div>
        );
      case 'start':
        return (
          <div className="AdminContent start">
            <h1 className="title">
              正在發佈中 ... 請稍候 ...
            </h1>
            <div className="target-survey-title">
              <Button>
                <Link to="/admin">返回問卷清單</Link>
              </Button>
              <Button bsStyle="primary">
                <Link to="/admin/report">看報表</Link>
              </Button>
              <Button bsStyle="success">
                <a
                  target="_blank"
                  href={this.state.demoUrl}
                >
                  發布效果 (Only Web)
                </a>
              </Button>
            </div>
          </div>
        );
      case 'report':
        return (
          <div className="AdminContent">
            <h1 className="title">報表</h1>
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
