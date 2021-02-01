import React, { Component } from 'react';
//import Navbar from './components/Navbar';
import { Route, Switch, withRouter } from 'react-router-dom';



class App extends Component{
   render(){
      return(
         <div className="intro">
            <div id="logoDiv">
               <img id="exodusLogo" src="www/img/EXODUS_LOGO_BG01-1024x461.png" />
            </div>
            <div id="imgsDiv-flex">
               <img id="exodusLogo" src="www/img/World-Link-Image.png" />
               <img id="exodusLogo" src="www/img/Story-Link-Image.png" />
               <img id="exodusLogo" src="www/img/Gallery-Link-Image.png" />
               <img id="exodusLogo" src="www/img/Community-Link-Image.png" />
            </div>
         </div>
      );
   }
}

export default App;