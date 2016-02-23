require('normalize.css');
require('styles/App.css');

import React from 'react';

var Points = React.createClass ({
  onClick:function(){
    this.props.onClick(this.props.index,this.props.top, this.props.left)
  },
  render: function(){
    return (
        <div className='points' onClick={this.onClick}></div>
    );
  }
});

export default Points;
