import React, { Component } from 'react';
import './SurveyMultiple.css';

class SurveyMultiple extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noAnswer: false,
    };
  }

  onChangeOptionHandler = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      noAnswer: false,
    });
  }

  onChangeCleanHandler = event => {
    const target = event.target;
    const name = target.name;
    const newState = {
      [name]: !this.state.noAnswer,
    };

    Object.keys(this.state).forEach(stateKey => {
      if (stateKey !== 'noAnswer') {
        newState[stateKey] = false;
      }
    });

    this.setState(newState);
  };

  onClickSubmitHandler = event => {
    if (event) {
      event.preventDefault();
    }
    
    console.log('onClickSubmitHandler:', this.state);
  };

  renderOption = (key, option) => {
    return (
      <li key={key}>
        <label className="custom-input">
          <input
            type="checkbox"
            name={option.name}
            checked={this.state[option.name]}
            onChange={this.onChangeOptionHandler}
          />
          <span className="check-checkbox"></span>
          <span className="custom-input-label">{option.label}</span> 
        </label>
      </li>
    );
  };

  render() {
    console.log(this.state);
    const answers = [
      {
        name: 'answer1',
        label: '答案 1',
      },
      {
        name: 'answer2',
        label: '答案 2',
      },
      {
        name: 'answer3',
        label: '答案 3',
      },
    ];
    return(
      <div className="SurveyMultiple">
        <h1 className="title">請輸入問題文字</h1>
        <p className="desc">請勾選所有合適的答案</p>
        <div className="options">
          <ol>
            {answers.map((option, key) => this.renderOption(key, option))}
            <li>
              <label className="custom-input">
                <input
                  type="checkbox"
                  name="noAnswer"
                  checked={this.state.noAnswer}
                  onClick={this.onChangeCleanHandler}
                />
                <span className="check-checkbox"></span>
                <span className="custom-input-label">以上皆非</span> 
              </label>
            </li>
          </ol>
        </div>
        <div className="button">
          <a
            className="action-button shadow animate blue"
            onClick={this.onClickSubmitHandler}
          >提交</a>
        </div>
      </div>
    );
  }
}

export default SurveyMultiple;
