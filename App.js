import React, { Component } from 'react';
//import Navbar from './components/Navbar';
import { Route, Switch, withRouter } from 'react-router-dom';



class App extends Component{
   render(){
      return(
         <div className="intro">
         	<h1>EXODUS</h1>
            <img src="www/img/EXODUS_LOGO_BG01-1024x461.png" />
         </div>
      );
   }
}

export default App;