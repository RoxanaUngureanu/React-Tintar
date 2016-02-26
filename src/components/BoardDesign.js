require('normalize.css');
require('styles/App.css');

import React from 'react';

class BoardDesign extends React.Component{
  render(){
    return (
      <div>
        <div className = "first-board">
          <div className = "inner-boards"></div>
          <div className = "inner-boards"></div>
          <div className = "second-board"></div>
          <div className = "third-board"></div>
          <div className = "inner-boards"></div>
          <div className = "inner-boards"></div>
        </div>
      </div>
    )
  }
}

export default BoardDesign;
