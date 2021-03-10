import React, { Component } from 'react';
import {
  Container,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import styles from '../../less/Earth.less';

class Earth extends Component {
  constructor(props) {
    super(props);
    this.usb = this.usb.bind(this);
    this.nio = this.nio.bind(this);
    this.svm = this.svm.bind(this);
    this.db = this.db.bind(this);
    this.state = {
      renderedPage: ""
    };
  };

  usb() {
    this.setState({ renderedPage: "USB" });
  };

  nio() {
    this.setState({ renderedPage: "NIO" });
  };

  svm() {
    this.setState({ renderedPage: "Science vs Magic" });
  };

  db() {
    this.setState({ renderedPage: "Database" });
  };
  
  render() {
    return (
      <Container
        fluid
        className="pt-3 p-5"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('../../www/img/background/Earth-world-concept.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        <h1 className="text-white">GREETINGS PIONEER – WELCOME TO U.S.B.</h1>

        <br />

        <div className="text-center text-light-gray">
          <h5 className="mt-15">
            <Nav className="justify-content-center">
              <NavItem>
                <NavLink
                  className="text-white"
                  href="#"
                  onClick={this.usb}
                >
                  U.S.B.
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className="text-white"
                  href="#"
                  onClick={this.nio}
                >
                  N.I.O. Suits
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className="text-white"
                  href="#"
                  onClick={this.svm}
                >
                  Science vs Magic
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className="text-white"
                  href="#"
                  onClick={this.db}
                >
                  DATABASE
                </NavLink>
              </NavItem>
            </Nav>
          </h5>

          <br />

          <hr className="bg-white" />
          <hr className="bg-white" />

          <br />
          
          {/* USB */}
          { this.state.renderedPage === "" || this.state.renderedPage === "USB" ? 
            <div>
              <p>GREETINGS, PIONEER – WELCOME TO U.S.B.</p>

              <br />
    
              <p>Life as we know it is coming to an end.</p>
              <p>The Earth is no longer sustainable for humanity.</p>
    
              <br />
    
              <p>
                Thank you for being a part of the initiative known as Project Exodus,
                our doomsday-prevention protocol involving the mass transferring of humanity into a
                neighboring dimension. 
                
                Proven by Dr. Stephen M. Feeney in the early 2000’s, the Multiverse Theory has become
                the basis for both prosperity and growth. In that time we have not only developed
                technology to look into neighboring worlds, but recent breakthroughs have also allowed
                us to enter into them.
              </p>
    
              <p>
                Of all the infinite possibilities, we have found a target world –dubbed: Exodus –
                large enough and similar enough for our emergency habitation. We have spent many years
                translating their languages and learning their cultures while periodically introducing
                some of Earth’s own technology and customs to create a smoother transition for
                both sides.
                
                There are a privileged few on Exodus who know of our inevitable convergence and are
                working to facilitate our arrival.
              </p>
    
              <br />
    
              <p>YOUR TRANSITION MAY BE DIFFICULT</p>
    
              <p>PLEASE BE AWARE OF THE CHANGES THAT YOUR BODY WILL EXPERIENCE</p>
    
              <p>A prepared mind makes for an easier time adjusting to the New World.</p>
            </div> : null
          }

          {/* NIO */}
          { this.state.renderedPage === "NIO" ? 
            <div>
              <h1>NIO</h1>
              <h1>NIO</h1>
              <h1>NIO</h1>
              <h1>NIO</h1>
              <h1>NIO</h1>
              <h1>NIO</h1>
              <h1>NIO</h1>
              <h1>NIO</h1>
              <h1>NIO</h1>
            </div> : null
          }

          {/* Science vs Magic */}
          { this.state.renderedPage === "Science vs Magic" ?
            <div>
              <h1>Science vs Magic</h1>
              <h1>Science vs Magic</h1>
              <h1>Science vs Magic</h1>
              <h1>Science vs Magic</h1>
              <h1>Science vs Magic</h1>
              <h1>Science vs Magic</h1>
              <h1>Science vs Magic</h1>
              <h1>Science vs Magic</h1>
              <h1>Science vs Magic</h1>
            </div> : null
          }

          {/* Database */}
          { this.state.renderedPage === "Database" ?
            <div>
              <h1>Oh hello, Clarice</h1>
              <h1>Oh hello, Clarice</h1>
              <h1>Oh hello, Clarice</h1>
              <h1>Oh hello, Clarice</h1>
              <h1>Oh hello, Clarice</h1>
              <h1>Oh hello, Clarice</h1>
              <h1>Oh hello, Clarice</h1>
              <h1>Oh hello, Clarice</h1>
              <h1>Oh hello, Clarice</h1>
            </div> : null            
          }
        </div>
      </Container>
    );
  };
};

export default Earth;