import React, { Component } from 'react';
import './App.css';
import ScatterPlot from './components/ScatterPlot';
import { Button } from 'react-bootstrap';
import * as d3 from 'd3';

export default class App extends Component {
  //our single state of truth lives here for now... 
  //until we redux our D3 apps!
  constructor() {
    super()
    this.state = {
      data:[]
    }
    this.settings = {
      numDataPoints : 10,
      maxRange : 50,
      margin : 15
    }
  }
  
  randomizeData() {
    this.settings.numDataPoints = Math.ceil(Math.random()*20)

    let randomData = [];

    d3.range(this.settings.numDataPoints).forEach((e,i)=>{
      randomData.push([Math.floor(Math.random()*this.settings.maxRange),Math.floor(Math.random()*this.settings.maxRange)])
      if(i === this.settings.numDataPoints-1) this.setState({data:randomData})
    })   
  }
  handleClick(e) {
    this.randomizeData();
  }
  componentWillMount(){
      this.randomizeData();
  }
  render() {
    const styles = {
      width:600,
      height:420,
      backgroundColor:'#efefef',
      marginBottom:22 +'px'
    }

    return (
      <div className="App">
        <ScatterPlot data={this.state.data} {...this.settings} styles={styles}/>
        <Button onClick={this.handleClick.bind(this)}>Randomize</Button>
      </div>
    );
  }
  componentDidMount(){

  }
}

