import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
export default class Axis extends Component {
  
  renderAxis() {
  	const props = this.props;
  	const node = ReactDOM.findDOMNode(this);
  	const scale = props.scale;
  	switch(props.orient){
  		case "left":
  			var yAxis = d3.axisLeft().scale(scale);
  			d3.select(node).call(yAxis);
  		break;
  		case "bottom":
  			var xAxis = d3.axisBottom().scale(scale);
  			d3.select(node).call(xAxis);
  		break;
      default:
        console.log("default")
        break;
  	}
  }
  render() {
   
    return (
    	<g className="axis" transform={this.props.translate}></g>
    );
  }
  componentDidMount() {
  		this.renderAxis();
  }
  componentDidUpdate() {
  		this.renderAxis();
  }
}

