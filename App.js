import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Community from './components/Community';
import World from './components/World';
import Default from './components/Default';

class App extends Component{
   render(){
      return(
         <div className="intro">
            <NavigationBar />
         	<h1>EXODUS</h1>
            <img src="www/img/EXODUS_LOGO_BG01-1024x461.png" />
            <Switch>
               <Route path="/world" component={World} />
               <Route path="/story" component={Story} />
               <Route path="/gallery" component={Gallery} />
               <Route path="/community" component={Community} />
            </Switch>
         </div>
      );
   }
}

export default App;