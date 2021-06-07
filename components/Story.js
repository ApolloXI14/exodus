import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../less/Story.less'
import { Route } from 'react-router-dom';
import StoryMenu from './StoryMenu';
import StoryEntry from './StoryEntry';
import { ImportData } from './ImportData';



class Story extends Component {
	constructor(props) {
    super(props);
    this.state = {
      req: require.context(STORY_DIR, true, /.txt$/),
      currentEntryId: null,
      dataArray: []
    };
  }
  setBackgroundImg() {
  	document.body.style.backgroundImage = "url(../www/img/background/bg.jpg)";
  }
  componentDidMount() {
  	this.setBackgroundImg();
  }
  componentDidUpdate(prevProps) {
  	this.setBackgroundImg();
    if (prevProps.match.params !== this.props.match.params) {
      const currentEntryId = this.props.match.params.id ? Number(this.props.match.params.id) -1 : null; // minusShifting for array
        this.setState((state, props) => ({
          currentEntryId: currentEntryId
        }));
      }
    }
  render(){
      const StoryMenuWithData = ImportData(StoryMenu, this.state.req);
      const StoryEntryWithData = ImportData(StoryEntry, this.state.req);
      return (
        <div>
              {this.state.currentEntryId === null ? 
              <StoryMenuWithData req={this.state.req} array={this.state.dataArray} /> :
              <StoryEntryWithData req={this.state.req} dataArray={this.state.dataArray} lastEntryId={this.state.dataArray.length} />}
        </div>
      );
   };
};

export default Story;
