require('normalize.css');
require('styles/App.css');

import React from 'react';
import BoardDesign from './BoardDesign';
import Points from './Points';

var BoardLogic = React.createClass ({
  getInitialState: function(){
    //var board=[[0,0,0],[0,0,0],[0,0,0]];
    var board=[];
    for (var i=0; i<24; i++) {
      board.push({number: i});
    }
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
    //var points=[];
    //var top = 0;
    //var left = 0;
    //var size = 400;
    //for (var i=0; i<3; i++){
    //    points.push(<Points key={i+size} top={top+size/2} left={left+size/2}onClick={this.onPointClick}/>);
    //
    //}
    //}
    var points = [];
    var size = this.state.size;
    for (var i=0; i< 3; i++) {
      for (var j=0; j< 3; j++){
        var value = this.state.board[0];
        points.push(<Points key={i*size+j} top={j} left={i} onClick={this.onPointClick} value={value} />);
      }
    }
    //for (var i=0; i<24; i++){
    //    var point = <Points key={i} index={i} onClick={this.onPointClick}/>;
    //    points.push(point);
    //}

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
  onPointClick:function(){
    console.log('worksssssss')
  }
});

export default BoardLogic;
