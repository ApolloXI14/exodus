// <Link> React components are not handled by "html-react-parser"; consider enhancement?
import parse from 'html-react-parser';
import React, { Component } from 'react';

export function ImportData(WrappedComponent, dataArray) {
	return class importData extends Component {

		constructor(props) {
			super(props);
			this.state = {
				req: this.props.req,
				dataArray: []
			};
		}

		componentDidMount(props) {
	      function importAll(req) {
	        let txtfiles = []; // 2D array in [['', ...], ''] form, to get array of metadata (parsed from fileName) and file content
	        var fileArray = req.keys().map((item) => {
			    return {
			        fileName: item,
			        entryId: Number(item.replace('.txt', '').split('_')[1]) || 0
			    }
			}).sort((a,b) => a.entryId - b.entryId);
	        fileArray.map((item, index) => {
	          txtfiles.push( [item.fileName, parse(req(item.fileName)) ] ); });
	          return txtfiles;
	      }
	      this.setState((state, props) => ({
	      	dataArray: importAll(this.props.req)
	      }));
		}
		componentDidUpdate(prevProps) {
			if (prevProps && prevProps.dataArray && (prevProps.dataArray !== this.props.dataArray)) {
				this.setState(() =>  ({
					dataArray: this.state.dataArray
				}));
			}
		}

		render () {
			const {extraProp, ...passThroughProps } = this.props;
			const dataArray = this.state.dataArray;
			return <WrappedComponent dataArray={this.state.dataArray} {...this.state} />;
		}


	}
}