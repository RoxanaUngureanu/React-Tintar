require('normalize.css');
require('styles/App.css');

import React from 'react';

var Board = React.createClass ({
  render: function(){

    return (
      <div>
        <h1>TINTAR, FRATE!</h1>
        <div className="first-board">
          <div className="inner-boards"></div>
          <div className="inner-boards"></div>
          <div className="second-board"></div>
          <div className="third-board"></div>
          <div className="inner-boards"></div>
          <div className="inner-boards"></div>
        </div>
      </div>
    );
  }
});

export default Board;
