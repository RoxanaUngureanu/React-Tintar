require('normalize.css');
require('styles/App.css');

import React from 'react';
import BoardDesign from './BoardDesign';
import Point from './Points';

var BoardLogic = React.createClass ({
  getInitialState: function(){
    var board=[];
    var size = 400;
    return {
      board:board,
      white:9,
      black:9,
      player:1,
      size:size
    }
  },
  render: function(){
    var points=[];
    var top = 0;
    var left = 0;
    for (var i=0; i<24; i++){
      if (i<8){
        top = this.topPos((i-this.startPos(i)),400);
        left = this.leftPos((i-this.startPos(i)),400);
      } else  if (i>=8 && i<16){
        top = this.topPos((i-this.startPos(i)),300)+50;
        left = this.leftPos((i-this.startPos(i)),300)+50;
      } else {
        top = this.topPos((i-this.startPos(i)),200)+100;
        left = this.leftPos((i-this.startPos(i)),200)+100;
      }
        points.push(<Point key={i} index={i} top={top} left={left} onClick={this.onPointClick}/>);
    }
    return (
      <div>
        <h1>Nine Men's Morris</h1>
        <div className="parent-div">
          {points}
            <BoardDesign/>
        </div>
        <div className="game-details">
          <p>White:{this.state.white}</p>
          <p>Black: {this.state.black}</p>
        </div>
      </div>
    );
  },

  startPos:function(index){
    return Math.floor(index/8)*8
  },

  topPos:function(index,size){
    if (index < 3){
      return 0
    } else if (index === 3 || index === 7){
      return size/2
    } else {
      return size
    }
  },

  leftPos:function(index,size){
    if (index === 0 || index > 5){
      return 0
    } else if (index === 1 || index === 5){
      return size/2
    } else {
      return size
    }
  },

  onPointClick:function(){

      console.log("clickity-click")
  }
});

export default BoardLogic;
