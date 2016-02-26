require('normalize.css');
require('styles/App.css');

import React from 'react';

class Point extends React.Component {
  onClick(){
    this.props.onClick(this.props.index,this.props.top, this.props.background, this.props.left)
  }
  render(){
    let style = {
      left: this.props.left,
      top: this.props.top,
      background:this.props.background
    };
    return (
        <div className = 'points' style = {style} onClick = {this.onClick.bind(this)}></div>
    )
  }
}

export default Point;
