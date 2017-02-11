import React, { Component } from 'react';

export default class Circle extends Component {
  toggleOn() {
  	//console.log("on")	
  	console.log(this.props)
  }
  toggleOff() {
  	//console.log("off")
  }
  render() {
    return (
			<circle 
				className="circles"
				onMouseEnter={this.toggleOn.bind(this)} 
				onMouseLeave={this.toggleOff.bind(this)}
				{...this.props} 
			></circle>
    );
  }
  componentDidUpdate() {
  }

}



