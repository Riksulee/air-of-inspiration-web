import React, { Component } from 'react';
import PMHolder from './PMHolder';
import styles from './UpperPart.css';

class UpperPart extends Component {
  render() {
    return (
      <div className={styles.UpperPart}>
        <PMHolder />
      </div>
    );
  }
}

export default UpperPart;
