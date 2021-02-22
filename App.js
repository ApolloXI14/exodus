import React, { Component } from 'react';
import World from './components/World.js';
import Story from './components/Story.js';
import Gallery from './components/Gallery.js';
import Community from './components/Community.js';
import { Route, Switch, withRouter } from 'react-router-dom';
import PhotoNavbar from './components/PhotoNavbar';

class App extends React.PureComponent{
    constructor(props) {
      super(props);
      this.state = {
         showPhotoNavbar: true
      };
    }
    componentDidUpdate(props) {
      let location = this.props.location.pathname.split('/');
      let val = location[location.length-1];
      this.setState({
        showPhotoNavbar: val ? false : true
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
            <div id="photoNavbar">
            {this.state.showPhotoNavbar && (<PhotoNavbar />)}
            </div>
         </div>
      );
   }
}

export default withRouter(App);