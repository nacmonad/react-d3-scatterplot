import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Circle from './Circle';

export default class DataCircles extends Component {

  renderCircles(coords, index, arr) {

  	const props = {
      dx:coords[0],
      dy:coords[1],
  		cx:this.props.xScale(coords[0]),
  		cy:this.props.yScale(coords[1]),
  		key: index
  	}
  	//return (<circle className="circles" {...props}></circle>)
    return (<Circle className="circles" id={'circle-'+props.key} {...props}/>)
  
  }

  render() {
    return (
          <ReactCSSTransitionGroup 
          transitionName="circles"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={1500}
          component="g">        
                   {this.props.data.map(this.renderCircles.bind(this))}
          </ReactCSSTransitionGroup>

    	
    );
  }

}

