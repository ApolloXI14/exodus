import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Story extends Component{
	constructor(props) { 
		super(props);
		this.state = {
		};
	}
	componentDidMount(props) { 
	     console.log('STORY COMP MOUNTED');
	}
   render(){
      return(
         <div id="storyCompDiv">
          	STORY COMPONENT
		</div>
      );
   }
}
export default Story;
