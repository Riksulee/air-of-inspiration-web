import React, { Component } from 'react';
import cigarette from './cigarette.png';
import styles from './CigaretteHolder.css';

class BottomPart extends Component {
    render() {

        const cigarettePic = <img src={cigarette} alt="cigarette" height="100" width="200" />

        return (
            <div className={styles.CigaretteContainer}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        {cigarettePic}
                    </div>
                    <div className={styles.column}>
                        {cigarettePic}
                    </div>
                    <div className={styles.column}>
                        {cigarettePic}
                    </div>
                </div>
            </div>
        );
    }
}

export default BottomPart;