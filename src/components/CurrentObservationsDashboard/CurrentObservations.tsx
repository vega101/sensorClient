import React, { Component } from "react";
import CurrentTemperatureHeadline from "./CurrentTemperatureHeadline";
import CurrentHumidityHeadline from "./CurrentHumidityHeadline";
import HighLowTemperatureHeadline from "./HighLowTemperatureHeadline";
import HighLowHumidityHeadline from "./HighLowHumidityHeadline";
import ChartTemperature from "./ChartTemperature";

export interface Props {
    
}
 
export interface State {
  currentTemperature: number,
  currentHumidity: number,
  highLowTemp: {
    highValue: number,
    lowValue: number
  } 
}

 
class CurrentObservations  extends Component<Props, State> {
    state = { currentTemperature: 0, currentHumidity: 0, highLowTemp: {highValue: 0, lowValue: 0}} 
     
    componentDidMount() {
      fetch('http://localhost:3600/getCurrentObservations')
      .then(res => res.json())
      .then((data) => {
        this.setState({ currentTemperature: data.currentTemperature[0].value, currentHumidity: data.currentHumidity.length ? data.currentHumidity[0].value : 0, highLowTemp: {highValue: 50, lowValue: 10}} )
      })
      .catch(console.log)
    }

    render() { 
        return <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-3"><CurrentTemperatureHeadline value={this.state.currentTemperature}></CurrentTemperatureHeadline></div>
          <div className="col-md-6 p-3"><CurrentHumidityHeadline value={this.state.currentHumidity}></CurrentHumidityHeadline></div>          
        </div>
        <div className="row">
          <div className="col-md-6 p-3"><HighLowTemperatureHeadline value={this.state.highLowTemp}></HighLowTemperatureHeadline></div>
          <div className="col-md-6 p-3"><HighLowHumidityHeadline></HighLowHumidityHeadline></div>          
        </div>
        <div className="row">
          <div className="col-md-12 p-3"><ChartTemperature></ChartTemperature></div>         
        </div>
        <div className="row">
          <div className="col-md-12 p-3">Chart: Humidity Last 24 Hours</div>          
        </div>
      </div>;
    }
}
 
export default CurrentObservations ;