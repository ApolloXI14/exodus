import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PhotoNavbar from './components/PhotoNavbar';
import NavigationBar from './components/Navbar';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Community from './components/Community';
import World from './components/World';
import Earth from './components/worlds/Earth';
import Exodus from './components/worlds/Exodus';
import Default from './components/Default';
import styles from './less/App.less';

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
         <div id="AppDiv" className="intro" >
            <NavigationBar />
            <Switch>
               <Route exact path="/earth" component={Earth} />
               <Route exact path="/exodus" component={Exodus} />
               <Route exact path="/world" component={World} />
               <Route exact path="/story" component={Story} />
               <Route exact path="/story/:id" component={Story} />
               <Route path="/gallery" component={Gallery} />
               <Route path="/community" component={Community} />
            </Switch>
            <div id="photoNavbar">
               {this.state.showPhotoNavbar && (<PhotoNavbar />)}
            </div>
         </div>
      );
   }
}

export default withRouter(App);