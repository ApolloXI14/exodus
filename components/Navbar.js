import React, { Component } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from 'reactstrap';
import styles from '../less/Navbar.less';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      navOpen: false
    }
  };

  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };

  render() {
    const url = window.location.pathname;
    return (
      <Navbar dark expand="md" className={ url === "/world" ? "bg-black nav-responsive" : "bg-black"} sticky="top">
        <NavbarBrand href="/">
          <img src="www/img/EXODUS_LOGO01-e1590806106934.png" alt="Exodus Nav Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.navOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="px-3">
              <NavLink href="/world" className={ url !== "/world" ? "" : "active-tab"}>
                World
              </NavLink>
            </NavItem>

            <NavItem className="px-3">
              <NavLink href="/story" className={ url !== "/story" ? "" : "active-tab"}>
                Story
              </NavLink>
            </NavItem>

            <NavItem className="px-3">
              <NavLink href="/gallery" className={ url !== "/gallery" ? "" : "active-tab"}>
                Gallery
              </NavLink>
            </NavItem>
            
            <NavItem className="px-3">
              <NavLink href="/community" className={ url !== "/community" ? "" : "active-tab"}>
                Community
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  };
};

export default NavigationBar;