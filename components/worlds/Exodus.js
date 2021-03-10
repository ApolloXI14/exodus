import React, { Component } from 'react';
import {
  Container,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from 'react-scroll';
import styles from '../../less/Exodus.less';
import { NavLink } from 'react-router-dom';

class Exodus extends Component {
  constructor(props) {
    super(props);
    this.map = this.map.bind(this);
    this.races = this.races.bind(this);
    this.magic = this.magic.bind(this);
    this.state = {
      renderedPage: "",
      map: false,
      races: false,
      magic: false
    };
  };

  map() {
    this.setState({
      renderedPage: "Map",
      map: true,
      races: false,
      magic: false
    });
  };

  races() {
    this.setState({
      renderedPage: "Races",
      map: false,
      races: true,
      magic: false
    });
  };

  magic() {
    this.setState({
      renderedPage: "Magic",
      map: false,
      races: false,
      magic: true
    });
  };

  render() {
    return (
      <Container
        fluid
        className="pt-3 p-5"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('../../www/img/background/Exodus-world-concept.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
        }}
      >
        { this.state.renderedPage === "" || this.state.renderedPage === "Map" ? 
          <h1 className="text-white">THE WORLD OF EXODUS</h1>
          : null
        }
        { this.state.renderedPage === "Races" ? 
          <h1 className="text-white">THE PEOPLE OF EXODUS</h1>
          : null
        }
        { this.state.renderedPage === "Magic" ? 
          <h1 className="text-white">MAGIC IN EXODUS</h1>
          : null
        }

        <br />

        <div className="text-light-gray">
          <h5 className="mt-15">
            <Nav className="justify-content-center">
              <NavItem className="nav-padding">
                <NavLink
                  className="main-nav"
                  activeClassName={this.state.renderedPage === "" || this.state.map ? "active-nav" : ""}
                  to="#"
                  onClick={this.map}
                >
                  Map
                </NavLink>
              </NavItem>

              <NavItem className="nav-padding">
                <NavLink
                  className="main-nav"
                  activeClassName={this.state.races ? "active-nav" : ""}
                  to="#"
                  onClick={this.races}
                >
                  Races
                </NavLink>
              </NavItem>

              <NavItem className="nav-padding">
                <NavLink
                  className="main-nav"
                  activeClassName={this.state.magic ? "active-nav" : ""}
                  to="#"
                  onClick={this.magic}
                >
                  Magic
                </NavLink>
              </NavItem>
            </Nav>
          </h5>

          {/* World Map */}
          { this.state.renderedPage === "" || this.state.renderedPage === "Map" ?
            <div>
              <br />
              <hr className="bg-white" />
              <hr className="bg-white" />
              <br />

              <p>
                The world of Exodus is much larger than Earth,
                and with so many different sentient races (some much more ancient than others)
                it isn’t uncommon for some parts of the world to seem from an entirely
                different time period than others. The charted parts of Exodus are divided
                into three regions; Shadarrin, Jiran, and Baldeming. Each of these continental
                masses have extremely unique cultures and technology.
              </p>

              <img src={"../../www/img/exodus-placeholder.jpg"} width="100%" usemap="#exodus-map" />

              <map name="exodus-map">
                <area shape="rect" coords="500, 10, 1100, 170" href="#" />
                <area shape="circle" coords="700, 400, 170" href="#" />
                <area shape="rect" coords="700, 800, 1200, 600" href="#" />
              </map>
            </div> : null
          }

          {/* Races */}
          { this.state.renderedPage === "Races" ?
            <div>
              <br />
              <hr className="bg-white" />
              <hr className="bg-white" />
              <br />

              <h1>Oh hello Clarce I mean races omglul</h1>
            </div> : null
          }

          {/* Magic */}
          { this.state.renderedPage === "Magic" ?
          <div>
            <br />
            <hr className="bg-white" />
            <hr className="bg-white" />
            <br />

            <h1>Shutcho bitchass mouf</h1>
          </div> : null
          }
        </div>
      </Container>
    );
  };
};

export default Exodus;