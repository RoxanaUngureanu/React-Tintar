require('normalize.css');
require('styles/App.css');

import React from 'react';

var Point = React.createClass ({
  onClick:function(){
    this.props.onClick(this.props.index,this.props.top, this.props.left)
  },
  render: function(){
    var style = {
      left: this.props.left,
      top: this.props.top
    };
    return (
        <div className='points' style={style} onClick={this.onClick}></div>
    );
  }
});

export default Point;
