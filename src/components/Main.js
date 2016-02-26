require('normalize.css');
require('styles/App.css');

import React from 'react';
import Board from './Board';

class AppComponent extends React.Component {
  render(){
    return (
      <div className = "board-container">
        <Board/>
      </div>
    )
  }
}

export default AppComponent;
