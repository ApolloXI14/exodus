import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Home extends Component{
	constructor(props) { 
		super(props);
		this.state = {
			
		};
	}
	componentDidMount(props) { 
	     console.log('GALLERY COMP MOUNTED');
	}
   render(){
      return(
         <div id="homeDiv">
          	GALLERY COMP
		</div>
      );
   }
}
export default Home;
