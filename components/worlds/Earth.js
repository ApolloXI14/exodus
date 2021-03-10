import React, { Component } from 'react';
import {
  Container,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import styles from '../../less/Earth.less';
import { Link } from 'react-scroll';

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
        { this.state.renderedPage === "" || this.state.renderedPage === "USB" ? 
          <h1 className="text-white">GREETINGS PIONEER – WELCOME TO U.S.B.</h1>
          : null
        }
        { this.state.renderedPage === "NIO" ? 
          <h1 className="text-white">N.I.O. SUITS</h1>
          : null
        }
        { this.state.renderedPage === "Science vs Magic" ? 
          <h1 className="text-white">SCIENCE VS MAGIC</h1>
          : null
        }
        { this.state.renderedPage === "Database" ? 
          <h1 className="text-white">DATABASE</h1>
          : null
        }

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
          
          {/* USB */}
          { this.state.renderedPage === "" || this.state.renderedPage === "USB" ? 
            <div>
              <br />

              <hr className="bg-white" />
              <hr className="bg-white" />

              <br />

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
              <br />

              <hr className="bg-white" />
                <Link to="creator" smooth={true}>Creator</Link> -
                <Link to="destroyer" smooth={true}> Destroyer</Link> -
                <Link to="observer" smooth={true}> Observer</Link> -
                <Link to="preserver" smooth={true}> Preserver</Link>
              <hr className="bg-white" />

              <br />

              <p className="text-left">
                USB’s breakthroughs in bio-energy and teleportation technology have
                allowed for the creation of what is known as N.I.O. (Nerve-Impulse-Operated)
                Tech. This specialized nanotechnology enters the bloodstream and eventually
                absorbs into the bones of the user, eventually shifting the body’s systems
                to facilitate the user’s new abilities. NIO tech is powered by the body’s
                energy to use USB’s teleportation sciences to allow the user to transfer
                programmed particles through time and space.
              </p>

              <br/>
              <hr className="bg-white" />
              <br/>

              <p className="text-center text-white"><b>UNIFORMICATION</b></p>

              <br/>
              
              <span className="text-left">
                <p>
                  NIO Suits can dramatically alter a target’s appearance, and on Exodus the
                  use of their abilities can cause distortions in the environment.
                  While NIO Suits can vary dramatically in appearance, there are a few key
                  similarities.
                </p>
                <p>
                  1) Sensory Nodes – Glowing sensory nodes line the body, providing
                  environmental information.
                </p>
                <p>
                  2) Satellite Drone – A mental-linked drone hovers around the suit providing
                  auxilary support.
                </p>              
                <p>
                  3) Occular Distortions – While NIO Suit programs emulate the phenomena
                  known as “spells” on Exodus a (usually harmless) visual distortion is
                  created in the air with each effect.
                </p>
              </span>

              <br/>
              <hr className="bg-white" />
              <br/>

              <p className="text-center text-white"><b>PARAMETERS</b></p>
              <span className="text-left">
                <p>
                  NIO Agents are divided into certain parameters in order to form their suits.
                  Its internal CPU scans an agents physical and mental history, discovering
                  their greatest triumphs and failings and customizing to adapt.
                  Agents are then sorted into four categories.
                  <div id="creator"></div>
                </p>
              </span>

              <br/>
              <hr className="bg-white" />
              <br/>

              <p className="text-center text-white"><b>CREATOR</b></p>
              <p>
                The Creator branch is in charge of creating infastructure and altering and
                improving upon designs on Exodus. This branch is in charge of terraforming
                Exodus to suit Earth’s transference and are integral for forming new colonies
                on the new world as well as creating tools to help Earth citizens adapt to
                Exodus.
                <p>Specialist Creator.xo programs include:</p>
                <div id="destroyer"></div>
              </p>
              <ul className="text-left">
                <li>Imagination</li>
                <li>Evolve</li>
                <li>Transmutation</li>
              </ul>

              <p className="text-center text-white"><b>DESTROYER</b></p>
              <p>
                The Destroyer branch is USB’s military unit. Specializing in offensive
                weaponry ranging from blades and bullets to energy and elemental attacks,
                Destroyers are in charge of protecting USB colonies and expanding territory
                as well as eliminating potential threats. 
                <p>Specialist Destroyer.xo programs include:</p>
                <div id="observer"></div>
              </p>
              <ul className="text-left">
                <li>Melee</li>
                <li>Ranged</li>
                <li>Energy</li>
              </ul>

              <p className="text-center text-white"><b>OBSERVER</b></p>
              <p>
                Datakeepers, NIO Observer units are masters of information gathering.
                Observers utilize espionage and surveylance technology to build USB’s
                library of information. Many observers infiltrate communities and help
                create guidlines on culture and living standards for human refugees
                transfering to Exodus.
                <p>Specialist Observer.xo programs include:</p>
                <div id="preserver"></div>
              </p>
              <ul className="text-left">
                <li>Hound</li>
                <li>Spy</li>
                <li>Scribe</li>
              </ul>

              <p className="text-center text-white"><b>PRESERVER</b></p>
              <p>
                Preservers are the “guardian angels” of USB and are usually warmly welcomed
                on any squad. Preserver technology utilizes medical and damage-preventative
                abilities, with rare reports of the most advanced Preservers occasionally
                able to revitalize the recent dead.
                <p>Specialist Preserver.xo programs include:</p>
              </p>
              <ul className="text-left">
                <li>Medical</li>
                <li>Fortifications</li>
                <li>Stasis</li>
              </ul>
            </div> : null
          }

          {/* Science vs Magic */}
          { this.state.renderedPage === "Science vs Magic" ?
            <div>
              <br />

              <hr className="bg-white" />
              <hr className="bg-white" />

              <br />
              
              <span className="text-left">
                <p className="text-white">
                  <b>
                    Everything, when you break it down to it’s smallest bit, is energy.
                    Science tells us that subatomic electrical arrangements govern the shape
                    and texture of all things, each pattern having it’s own defined “frequency.”
                  </b>
                </p>

                <br />

                <p className="text-white">
                  <b>
                    That’s all anything is.
                    Energy.
                  </b>
                </p>

                <br />

                <p>
                  <i>
                    This Verse, like all the others, sings it’s own melody. 
                    Sages have long discovered that, when broken down to the most base
                    components, everything is made up of the same frequencies arranged
                    in different patterns.
                  </i>
                </p>

                <br />

                <p>
                  <i>
                    That’s all anything is.
                    Music.
                  </i>
                </p>

                <br />

                <p className="text-white">
                  <b>
                    As hard as it is to believe, the galaxy and everything it developed
                    out of an expansion of heat and light that bonded to create the perfect
                    environment for life. Somehow, heat and light created an ongoing
                    evolutionary process. Heat and light formed a biological connection
                    between plants and animals. Heat and light gave humanity the intelligence
                    to appreciate the world around it. It’s a process that difficult to
                    understand and impossible to replicate, yet here we are trying our best
                    with this little thing we call “science.”
                  </b>
                </p>

                <br />

                <p>
                  <i>
                    One must never underestimate the will of the Cosmos.
                    The ingredients that created everything that is came from an intelligent
                    light far beyond mortal comprehension. Attempting to fit such omniscient
                    design into mortal comprehension is a fool’s errand, and so scholars
                    have learned to never fully submit to the laws of logic.
                    Much of the known world lies beyond our ability to see, hear, taste,
                    touch, and smell. We needed a word for the unexplainable ways we
                    learned to interact with the world around us; we call it “magic.”
                  </i>
                </p>

                <br />

                <p className="text-white">
                  <b>
                    Through the lens of science we studied the world.
                    We documented what was and wasn’t possible as we tested the elements.
                    We discovered how to use electricity to hold information in silicon.
                    We’ve turned crystals into computers, and inserted computers into biology.
                    We’ve connected the world through a network of shared information, and
                    with that information we’ve controlled the world.
                  </b>
                </p>

                <br />

                <p>
                  <i>
                    A mage manipulates their environment by projecting their will into the
                    Verse: They alter the vibrations of the world. It starts from within,
                    gaining control over your own frequencies and energy arrangements.
                    Usually a focus -such as a crystal in a staff or wand- helps guide the
                    flow, and the mage creates a brief ripple in the universal law with
                    their will.
                  </i>
                </p>

                <br />

                <p className="text-white">
                  <b>
                    The world provided us the tools and insight we needed to discover a
                    digital existence; now computers are key to our world.
                  </b>
                </p>

                <br />

                <p>
                  <i>
                    The Verse is a grand mystery that can never fully be solved.
                    By accepting that energy has always been a conscious thing,
                    and discovering our connection to it, magic has become key to our world.
                  </i>
                </p>
              </span>
            </div> : null
          }

          {/* Database */}
          { this.state.renderedPage === "Database" ?
            <div>
              <br />

              <hr className="bg-white" />
              <hr className="bg-white" />

              <br />
              
              <h1>Oh hello, Clarice</h1>
              <br />
              <img src={"../../www/img/Hello-Clarice.jpg"} width="300px" />
              <img src={"../../www/img/Hello-Clarice.jpg"} width="300px" />
              <img src={"../../www/img/Hello-Clarice.jpg"} width="300px" />
              <img src={"../../www/img/Hello-Clarice.jpg"} width="300px" />
              <img src={"../../www/img/Hello-Clarice.jpg"} width="300px" />
              <img src={"../../www/img/Hello-Clarice.jpg"} width="300px" />
              <img src={"../../www/img/Hello-Clarice.jpg"} width="300px" />
              <img src={"../../www/img/Hello-Clarice.jpg"} width="300px" />
            </div> : null            
          }
        </div>
      </Container>
    );
  };
};

export default Earth;