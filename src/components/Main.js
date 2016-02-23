require('normalize.css');
require('styles/App.css');

import React from 'react';
import Board from './Board';

var AppComponent = React.createClass ({
  render: function(){

    return (
      <div className = "board-container">
        <Board/>
      </div>
    );
  }
});

export default AppComponent;
