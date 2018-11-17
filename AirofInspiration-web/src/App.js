import React, { Component } from 'react';
import UpperPart from './UpperPart';
import BottomPart from './BottomPart';

class App extends Component {
  render() {
    return (
      <div>
        <UpperPart />
        <BottomPart />
      </div>
    );
  }
}
export default App;
