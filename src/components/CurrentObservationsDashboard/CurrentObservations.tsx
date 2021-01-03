import React, { Component } from "react";
import CurrentTemperatureHeadline from "./CurrentTemperatureHeadline";
import CurrentHumidityHeadline from "./CurrentHumidityHeadline";

export interface Props {
    
}
 
export interface State {
    name: string
}
 
class CurrentObservations  extends Component<Props, State> {
    state = { name:  "Current Observations"}   

    render() { 
        return <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-3"><CurrentTemperatureHeadline></CurrentTemperatureHeadline></div>
          <div className="col-md-6 p-3"><CurrentHumidityHeadline></CurrentHumidityHeadline></div>          
        </div>
        <div className="row">
          <div className="col-md-6 p-3">Headline: High/Low Temp</div>
          <div className="col-md-6 p-3">Headline: High/Low Himidity</div>          
        </div>
        <div className="row">
          <div className="col-md-12 p-3">Chart: Temperature Last 24 Hours</div>         
        </div>
        <div className="row">
          <div className="col-md-12 p-3">Chart: Humidity Last 24 Hours</div>          
        </div>
      </div>;
    }
}
 
export default CurrentObservations ;