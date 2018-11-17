import React, { Component } from 'react';
import CigaretteHolder from './CigaretteHolder';
import styles from './BottomPart.css';

class UpperPart extends Component {
  render() {
    return (
      <div className={styles.BottomPart}>
        <CigaretteHolder />
      </div>
    );
  }
}

export default UpperPart;
