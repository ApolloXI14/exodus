import React, { Component } from 'react';
import styles from '../less/World.less';

class World extends Component {
  render() {
    return (
      <div className="world-container">

        <div className="top-image-container">
          <div className="top-image-text">U.S.B.</div>
          <a href='/earth'>
            <img src="../www/img/background/Earth-world-concept.jpg" className="top-image" />
          </a>
        </div>

        <div className="bottom-image-container">
          <div className="bottom-image-text">Exodus</div>
          <a href='/exodus'>
            <img src="../www/img/background/Exodus-world-concept.jpg" className="bottom-image" />
          </a>
        </div>

      </div>
    );
  };
};

export default World;



/* Old Component, two images diagonal split, but not responsive
import React, { Component } from 'react';

class World extends Component {
  render() {
    return (
      <div className='pageOption'>
        <a href='/earth' className='option' data-inf='U.S.B.'>
          <img src="../www/img/background/Earth-world-concept.jpg" width="800px" />
        </a>
        <a href='/exodus' className='option' data-inf='Exodus'>
          <img src="../www/img/background/Exodus-world-concept.jpg" width="800px" />
        </a>
      </div>
    );
  };
};

export default World;
*/