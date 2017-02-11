import React, { Component } from 'react';

export default class ToolTip extends Component {

  render() {
  	console.log(this.props)
    return (
			<rect className="tooltip" x={this.props.cx} y={this.props.cy}></rect>
    );
  }
  componentDidUpdate() {
  }

}



