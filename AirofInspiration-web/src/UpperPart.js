import React, { Component } from 'react';
import PMHolder from './PMHolder';
import './UpperPart.css';

class UpperPart extends Component {
  render() {
    return (
      <div className="UpperPart">
        <PMHolder />
      </div>
    );
  }
}

export default UpperPart;
