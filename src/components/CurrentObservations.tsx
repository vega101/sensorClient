import React, { Component } from "react";

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
          <div className="col-md-6">Headline: Current Temperature</div>
          <div className="col-md-6">Headline: Current Humidity</div>          
        </div>
        <div className="row">
          <div className="col-md-6">Headline: High/Low Temp</div>
          <div className="col-md-6">Headline: High/Low Himidity</div>          
        </div>
        <div className="row">
          <div className="col-md-12">Chart: Temperature Last 24 Hours</div>         
        </div>
        <div className="row">
          <div className="col-md-12">Chart: Humidity Last 24 Hours</div>          
        </div>
      </div>;
    }
}
 
export default CurrentObservations ;