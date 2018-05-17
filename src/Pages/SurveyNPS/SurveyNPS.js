import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SurveyNPS.css';

const STAR_AMOUNT = 10;

class SurveyNPS extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: '',
    };
  }

  onMouseEnterHandler = key => event => {
    const stars = ReactDOM.findDOMNode(this.rating).getElementsByClassName('star');
    Object.keys(stars).forEach((starKey, starsIndex) => {
      if (starsIndex <= key) {
        stars[starKey].className = 'star rating-star-black';
      }else {
        stars[starKey].className = 'star rating-star';
      }
    });
  };

  onMouseLeaveHandler = key => event => {
    const stars = ReactDOM.findDOMNode(this.rating).getElementsByClassName('star');
    Object.keys(stars).forEach((starKey, starsIndex) => {
      if (this.state.starCount === '') {
        stars[starKey].className = 'star rating-star';
      }else {
        if (starsIndex < this.state.starCount) {
          stars[starKey].className = 'star rating-star-black';
        }else {
          stars[starKey].className = 'star rating-star';
        }
      }
    });
  };

  onClickHandler = key => event => {
    const starCount = key + 1;
    this.setState({ starCount })
  };

  renderStar = key => {
    return (
      <span
        key={key}
        className="star rating-star"
        onClick={this.onClickHandler(key)}
        onMouseEnter={this.onMouseEnterHandler(key)}
        onMouseLeave={this.onMouseLeaveHandler(key)}
      />
    );
  };

  render() {
    console.log('star: ', this.state.starCount);
    const stars = Array.apply(null, {length: STAR_AMOUNT}).map(Number.call, Number);
    return(
      <div className="SurveyNPS">
        <h1 className="title">請輸入問題文字</h1>
        <p className="desc">您覺得</p>
        <div className="rating" ref={(rating) => this.rating = rating}>
          {stars.map(key => this.renderStar(key))}
        </div>
        <div className="lables">
          <table cellPadding="0" cellSpacing="0" border="0" width="100%">
            <tbody>
              <tr>
                <td>不太滿意</td>
                <td>非常</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SurveyNPS;
