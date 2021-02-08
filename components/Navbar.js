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

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      open: false
    }
  };

  toggleNav() {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const url = window.location.pathname;
    return (
      <Navbar className="nav-background" expand="md" dark>
        <NavbarBrand href="/">Infinite Exodus</NavbarBrand>
        <NavbarToggler onClick={this.toggleNav} />
        <Collapse isOpen={this.state.open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="px-3 py-3">
              <NavLink href="/world" className={ url !== "/world" ? "" : "active-tab"}>World</NavLink>
            </NavItem>
            <NavItem className="px-3 py-3">
              <NavLink href="/story" className={ url !== "/story" ? "" : "active-tab"}>Story</NavLink>
            </NavItem>
            <NavItem className="px-3 py-3">
              <NavLink href="/gallery" className={ url !== "/gallery" ? "" : "active-tab"}>Gallery</NavLink>
            </NavItem>
            <NavItem className="px-3 py-3">
              <NavLink href="/community" className={ url !== "/community" ? "" : "active-tab"}>Community</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  };
};

export default NavigationBar;