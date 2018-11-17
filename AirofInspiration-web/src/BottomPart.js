import React, { Component } from 'react';
import CigaretteHolder from './CigaretteHolder';
import './BottomPart.css';

class UpperPart extends Component {
  render() {
    return (
      <div className="BottomPart">
        <CigaretteHolder />
      </div>
    );
  }
}

export default UpperPart;
