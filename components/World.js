import React, { Component } from 'react';

class World extends Component {
  render() {
    return (
      <div>
        <img
          src="../www/img/background/Earth-world-concept.jpg"
          style={{
            clipPath: "polygon(100% 0%, 0% 100%, 0% 0%)",
            width: "100%",
            position: "absolute",
          }}
        />
        <img 
          src="../www/img/background/Exodus-world-concept.jpg"
          style={{
            clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
            width: "100%",
            position: "relative",
          }}
        />
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