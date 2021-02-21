import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PhotoNavbar extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			showNavbar: this.props.showNavbar
		};
	}
	componentDidMount() {
		
	 }
	render() {
		return (
			<div id="imgsDiv-flex" style= {{display: this.props.showNavbar ? "flex" : "none"}}>
               <Link to="/world"> <img id="exodusLogo" src="www/img/World-Link-Image.png" /></Link>
               <Link to="/story"> <img id="exodusLogo" src="www/img/Story-Link-Image.png" /></Link>
               <Link to="/gallery"><img id="exodusLogo" src="www/img/Gallery-Link-Image.png" /></Link>
               <Link to="/community"> <img id="exodusLogo" src="www/img/Community-Link-Image.png" /></Link>
            </div>);
	}
}

export default PhotoNavbar;