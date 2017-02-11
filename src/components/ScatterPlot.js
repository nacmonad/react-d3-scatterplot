import React, { Component } from 'react';
import * as d3 from 'd3';
import XYAxis from './XYAxis';
import DataCircles from './DataCircles';

export default class ScatterPlot extends Component {


  getXScale(p) {
    const marginx = 20
  	const xMax = d3.max(p.data, (d)=>{
  		return d[0];
  	});
  	return d3.scaleLinear()
  			.domain([0,xMax])
  			.range([marginx,p.styles.width-marginx]);
  }
  getYScale(p) {
    const marginy = 10
  	const yMax = d3.max(p.data, (d)=>{ 
  		return d[1] 
  	});
  	return d3.scaleLinear()
  			.domain([0,yMax])
  			.range([p.styles.height-marginy,marginy+5]);

  }
 
  componentWillMount() {
    
  }
  render() {
  	const props = this.props;
  	const xScale = this.getXScale(props);
  	const yScale = this.getYScale(props);	
    return (
    	<svg className="scatter-plot" style={props.styles}>
    			<DataCircles xScale={xScale} yScale={yScale} {...props} />
    			<XYAxis xScale={xScale} yScale={yScale} {...props} />
    	</svg>
      
    );
  }
  componentDidMount() {
   	
  }
}

