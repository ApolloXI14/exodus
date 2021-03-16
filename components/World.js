import React, { Component } from 'react';
import styles from '../less/World.less';

class World extends Component {
  render() {
    return (
      <div className="world-container container">
        <div className="top-image-container">
          <a href='/earth'>
            <img src="../www/img/background/Earth-world-concept.jpg" className="top-image" />
          </a>
        </div>

        <div className="bottom-image-container">
          <a href='/exodus'>
            <img src="../www/img/background/Exodus-world-concept.jpg" className="bottom-image" />
          </a>
        </div>
      </div>
    );
  };
};

export default World;