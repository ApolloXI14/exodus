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