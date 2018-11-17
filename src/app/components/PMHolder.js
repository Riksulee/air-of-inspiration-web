import React, { Component } from 'react';
import './UpperPart.css';
import styles from './PMHolder.css';

class UpperPart extends Component {
  render() {
    return (
      <div className={styles.PMHolder}>
        <div className={styles.TextBackground}>
            <p className={styles.PMHolderText}>45&micro;g</p>
        </div>
      </div>
    );
  }
}

export default UpperPart;