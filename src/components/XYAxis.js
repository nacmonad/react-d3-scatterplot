import React, { Component } from 'react';
import Axis from './Axis';

export default class XYAxis extends Component {
  render() {
    const props = this.props;
    const xpadding = 25
    //const ypadding = 25
    const xSettings = {
      translate: `translate(0,${this.props.styles.height-xpadding+5})`,
      scale: props.xScale,
      orient:'bottom'
    }
    const ySettings = {
      translate: `translate(${xpadding-5},-10)`,
      scale: props.yScale,
      orient:'left'
    }
    
    return (
    	<g>
       <Axis {...xSettings}/>
       <Axis {...ySettings}/> 
      </g>
    );
  }

}

