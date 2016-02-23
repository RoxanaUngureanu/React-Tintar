require('normalize.css');
require('styles/App.css');

import React from 'react';
import BoardDesign from './BoardDesign';

var BoardLogic = React.createClass ({
  getInitialState: function(){
    var board=[];
    return {
      board:board,
      white:9,
      black:9,
      player:1
    }
  },
  render: function(){

    return (
      <div>
        <h1>Nine Men's Morris</h1>
        <BoardDesign/>
        <div className="game-details">
          <p>White: {this.state.white}</p>
          <p>Black: {this.state.black}</p>
        </div>
      </div>
    );
  }
});

export default BoardLogic;
