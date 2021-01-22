import React, { Component } from "react";
import {IDataItem} from "../../Interfaces";
import CurrentTemperatureHeadline from "./CurrentTemperatureHeadline";
import CurrentHumidityHeadline from "./CurrentHumidityHeadline";
import HighLowTemperatureHeadline from "./HighLowTemperatureHeadline";
import HighLowHumidityHeadline from "./HighLowHumidityHeadline";
import ChartTemperature from "./ChartTemperature";
import ChartHumidity from "./ChartHumidity";
import ChartHighLowTemperature from "./ChartHighLowTemperature";
import ChartHighLowHumidity from "./ChartHighLowHumidity"

export interface Props {
    
}
 
export interface State {
  currentTemperature: number,
  currentHumidity: number,
  highLowTemp: {
    highValue: number,
    lowValue: number
  },
  highLowHumidity: {
    highValue: number,
    lowValue: number
  },
  highLowTemperature7Results: {
    high: Array<IDataItem>,
    low: Array<IDataItem>
  },
  highLowHumidity7Results: {
    high: Array<IDataItem>,
    low: Array<IDataItem>
  }
  temperature24Results: Array<IDataItem>,
  humidity24Results: Array<IDataItem>  
}
 
class CurrentObservations  extends Component<Props, State> {
   state = {
    currentTemperature: 0,
    currentHumidity: 0,
    highLowTemp: {
      highValue: 0,
      lowValue: 0
    },
    highLowHumidity: {
      highValue: 0,
      lowValue: 0
    },
    highLowTemperature7Results: {
      high: [],
      low: []
    },
    highLowHumidity7Results: {
      high: [],
      low: []
    },
    temperature24Results: [],
    humidity24Results: []  
  }
     
    componentDidMount() {
      fetch('http://service.redmagenta.co.uk/getCurrentObservations')
      .then(res => res.json())
      .then((data) => {
        this.setState({ 
          currentTemperature: data.currentTemperature.length ? data.currentTemperature[0].value : 0, 
          currentHumidity: data.currentHumidity.length ? data.currentHumidity[0].value : 0, 
          highLowTemp: {
            highValue: data.highTemperature.length ? data.highTemperature[0].value : 0, 
            lowValue: data.lowTemperature.length ? data.lowTemperature[0].value : 0
          }, 
          highLowHumidity: {
            highValue: data.highHumidity.length ? data.highHumidity[0].value : 0, 
            lowValue: data.lowHumidity.length ? data.lowHumidity[0].value : 0
          },
          highLowTemperature7Results: {
            high: data.highLowTemperature7Results.high,
            low: data.highLowTemperature7Results.low
          },
          highLowHumidity7Results: {
            high: data.highLowHumidity7Results.high,
            low: data.highLowHumidity7Results.high
          },
          temperature24Results: data.temperature24Results,
          humidity24Results: data.humidity24Results 
        })
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
          <div className="col-md-6 p-3"><HighLowHumidityHeadline  value={this.state.highLowHumidity}></HighLowHumidityHeadline></div>          
        </div>
        <div className="row">
          <div className="col-md-12 p-3"><ChartTemperature value={this.state.temperature24Results}></ChartTemperature></div>         
        </div>
        <div className="row">
          <div className="col-md-12 p-3"><ChartHumidity value={this.state.humidity24Results}></ChartHumidity></div>          
        </div>
        <div className="row">
          <div className="col-md-12 p-3"><ChartHighLowTemperature value={this.state.highLowTemperature7Results}></ChartHighLowTemperature></div>          
        </div>
        <div className="row">
          <div className="col-md-12 p-3"><ChartHighLowHumidity value={this.state.highLowHumidity7Results}></ChartHighLowHumidity></div>          
        </div>
      </div>;
    }
}
 
export default CurrentObservations ;