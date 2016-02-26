require('normalize.css');
require('styles/App.css');

import React from 'react';
import BoardDesign from './BoardDesign';
import Point from './Points';

class Board extends React.Component {
  constructor(){
    super();
    const board=[];
    let size = 400;
    for (let i=0; i<24;i++){
      board.push({initPlayer:-1})
    }
    this.state = {
      board,
      white:9,
      green:9,
      currentPlayer:1,
      size,
      status:'Start your turn'
    }
  }

  onPointClick(index){
    const initPlayer = this.state.board[index].initPlayer;
    const currentPlayer = this.state.currentPlayer;
    if (initPlayer === -1) {
      if ((currentPlayer === 1) && (this.state.white > 0)) {
        this.state.currentPlayer = 0;
        this.state.board[index].initPlayer = 1;
        this.state.white -= 1;
        this.state.status = 'Your turn'
      } else if (currentPlayer === 0 && (this.state.green > 0)) {
        this.state.currentPlayer = 1;
        this.state.board[index].initPlayer = 0;
        this.state.green -= 1;
        this.state.status = "Opponent's turn";
      }
      this.forceUpdate();
    }
  }

  render(){
    const points=[];
    let top = 0;
    let left = 0;
    const bgImage = "url('http://coryg89.github.io/assets/themes/img/wood-texture.jpg')";
    let background = bgImage;
    const currentPlayer = this.state.currentPlayer;
    for (let i=0; i<24; i++){
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

      if (this.state.board[i].initPlayer === 1) {
        background="url('http://www.tribalectic.com/store/pc/catalog/BC-Ti-Bead-Polished.jpg')"
      } else if (this.state.board[i].initPlayer === 0) {
        background="url('http://www.tribalectic.com/storedev/pc/catalog/BC-Ti-Bead-Green.jpg')"
      } else {
        background = bgImage;
      }

        points.push(<Point key={i} index={i} top={top} left={left}
                           currentPlayer={currentPlayer}
                           background={background}
                           onClick={this.onPointClick.bind(this)}/>);
    }

    return (
      <div>
        <h1>Nine Men's Morris</h1>
        <p className="status">{this.state.status}</p>
        <button className="button"  onClick={this.resetGame.bind(this)}>Reset the game!</button>
        <div className="parent-div">
          {points}
            <BoardDesign/>
        </div>
        <div className="game-details">
          <p>White: {this.state.white}</p>
          <p>Green: {this.state.green}</p>
        </div>
      </div>
    )
  }

  resetGame(){
    this.state.white = 9;
    this.state.green = 9;
    this.state.currentPlayer = 1;
    for (let i=0; i<24;i++){
      this.state.board[i].initPlayer = -1;
    }
    this.forceUpdate();
  }

  startPos(index){
    return Math.floor(index/8)*8
  }

  topPos(index,size){
    if (index < 3){
      return 0
    } else if (index === 3 || index === 7){
      return size/2
    } else {
      return size
    }
  }

  leftPos(index,size){
    if (index === 0 || index > 5){
      return 0
    } else if (index === 1 || index === 5){
      return size/2
    } else {
      return size
    }
  }
}

export default Board;
