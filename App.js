import React, { Component } from 'react';
import World from './components/World.js';
import Story from './components/Story.js';
import Gallery from './components/Gallery.js';
import Community from './components/Community.js';
//import Navbar from './components/Navbar';
import { Route, Switch, withRouter } from 'react-router-dom';
import PhotoNavbar from './components/PhotoNavbar';



class App extends React.PureComponent{
    constructor(props) {
      super(props);
      this.state = {
         showNavbar: false
      };
    }
    componentDidMount(props) {
      console.log('EXODUS MOUNTED');
      this.setState({
        showNavbar: true
      });
    }
   render(props){ 
      return(
         <div className="intro">
            
            <Switch>
                  <Route exact path="/world" component={World}/>
                  <Route exact path="/story" component={Story}/>
                  <Route exact path="/gallery" component={Gallery}/>
                  <Route exact path="/community" component={Community}/>
               </Switch>
            <PhotoNavbar showNavbar={this.state.showNavbar} />
         </div>
      );
   }
}

export default withRouter(App);