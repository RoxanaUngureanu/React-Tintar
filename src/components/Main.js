require('normalize.css');
require('styles/App.css');

import React from 'react';
import BoardLogic from './BoardLogic';

var AppComponent = React.createClass ({
  render: function(){

    return (
      <div className = "board-container">
        <BoardLogic/>
      </div>
    );
  }
});

export default AppComponent;
