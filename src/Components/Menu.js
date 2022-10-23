import React from 'react';
import Color from './Color.js'
/* Add any imports you think you might need here! */

const Menu = (props) => {
    return (
      <div className="colorOptions">
          <Color color="red" onClick={props.handleClick}/>
          <Color color="pink" onClick={props.handleClick}/>
          <Color color="blue" onClick={props.handleClick}/>
          <Color color="green" onClick={props.handleClick}/>
      </div>
    );
}

export default Menu;