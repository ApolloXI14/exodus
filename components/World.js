import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../less/World.less'

class World extends Component{
	componentDidMount(props) { 
	     console.log('WORLD COMP MOUNTED');
	}
   render(){
      return(
         <div id="worldCompDiv">
          	WORLD COMPONENT
		</div>
      );
   }
}
export default World;
