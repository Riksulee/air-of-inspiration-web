import React, { Component } from 'react';
import './UpperPart.css';
import './PMHolder.css';

class UpperPart extends Component {
  render() {
    return (
      <div className="PMHolder">
        <div className="TextBackground">
            <p className="PMHolderText">45&micro;g</p>
        </div>
      </div>
    );
  }
}

export default UpperPart;