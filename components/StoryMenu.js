import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../less/StoryMenu.less';

class StoryMenu extends Component{
   render(){
    return (
      <div id="storyMenuDiv">
      <ul>
        <ul>
          {this.props.dataArray.map((entry, index) => (
            <li key={index++}><Link to={`story/${index++}`}>{entry[0][0]}</Link></li>
            ))}
        </ul>
      </ul>
      </div>
      );
  }
}

export default StoryMenu;