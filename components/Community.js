import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Community extends Component{
	constructor(props) { 
		super(props);
		this.state = {

		};
	}
	componentDidMount(props) { 
	     console.log('COMMUNITY COMP MOUNTED');
	}
   render(){
      return(
         <div id="communityCompDiv">
          	COMMUNITY COMPONENT
		</div>
      );
   }
}
export default Community;
