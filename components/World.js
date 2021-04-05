import React, { Component } from 'react';
import styles from '../less/World.less';
import { Link } from 'react-router-dom';

class World extends Component {
  render() {
    return (
      <div className="world-container container">
        <div className="top-image-container">
        <Link to="/earth">
          <img src="../www/img/background/Earth-world-concept.jpg" className="top-image" />
        </Link>
        </div>

        <div className="bottom-image-container">
          <Link to="/exodus">
            <img src="../www/img/background/Exodus-world-concept.jpg" className="bottom-image" />
          </Link>
        </div>
      </div>
    );
  };
};

export default World;
