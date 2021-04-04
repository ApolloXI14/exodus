import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PhotoNavbar extends React.PureComponent {
	render() {
		return (
			<div id="imgsDiv-flex" style={{display: "flex"}}>
               <Link to="/world"> <img id="exodusLogo" src={IMGS_DIR + "World-Link-Image.png"} /></Link>
               <Link to="/story"> <img id="exodusLogo" src={IMGS_DIR + "Story-Link-Image.png"} /></Link>
               <Link to="/gallery"><img id="exodusLogo" src={IMGS_DIR + "Gallery-Link-Image.png"} /></Link>
               <Link to="/community"> <img id="exodusLogo" src={IMGS_DIR + "Community-Link-Image.png" } /></Link>
            </div>);
	}
}

export default PhotoNavbar;