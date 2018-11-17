import React, { Component } from 'react';
import cigarette from './cigarette.png';
import './CigaretteHolder.css';

class BottomPart extends Component {
    render() {

        const cigarettePic = <img src={cigarette} alt="cigarette" height="100" width="200" />

        return (
            <div className="CigaretteContainer">
                <div class="row">
                    <div className="column">
                        {cigarettePic}
                    </div>
                    <div className="column">
                        {cigarettePic}
                    </div>
                    <div className="column">
                        {cigarettePic}
                    </div>
                </div>
            </div>
        );
    }
}

export default BottomPart;