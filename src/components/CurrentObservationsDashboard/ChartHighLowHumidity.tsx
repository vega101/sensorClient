import React, { Component } from "react";
import {Line} from 'react-chartjs-2';
import {IDataSetItem, IDataItem} from "../../Interfaces";

export interface Props {
  value: {
    high: Array<IDataItem>,
    low: Array<IDataItem>
  }
}
 
export interface State {
    labels: Array<string>,
    datasets: Array<IDataSetItem>
}
 
class ChartHighLowHumidity  extends Component<Props, State> {
    state = this.getStateObject([], [], []);

    componentDidUpdate(prevProps: Props, prevState: State) {
      

      if (prevProps.value !== this.props.value) {

        let labels: string[] = [];
        let dataHigh: number[] = [];
        let dataLow: number[] = [];

        this.props.value.high.forEach(item => {
          let formattedDate = this.getFormattedDate(item);
          labels.push(formattedDate);
          dataHigh.push(item.value);
        });

        this.props.value.low.forEach(item => {
          let formattedDate = this.getFormattedDate(item);
          labels.push(formattedDate);
          dataLow.push(item.value);
        });

        this.setState(this.getStateObject(labels, dataHigh, dataLow));

      }

   }

   getFormattedDate(item: IDataItem){
      let itemDate = new Date(item.date * 1000);
      let day = itemDate.getDate();   
      let month = itemDate.getMonth() + 1;         
      let year = itemDate.getFullYear();  
      let formattedDate =  `${day}/${month}/${year}`; 
      return formattedDate;
   }

   getStateObject(labels: Array<string>, dataHigh: Array<number>, dataLow: Array<number>){
      return {
        labels: labels,
        datasets: [
          {
            label: 'Humidity High',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: '#dc3545',
            borderWidth: 2,
            data: dataHigh
          },
          {
            label: 'Humidity Low',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: '#4a99c7',
            borderWidth: 2,
            data: dataLow
          }
        ]
      }
   }

    render() { 
        return <div className="headlinePanelOuter currentTemperaturePanel card">
                    <div className="card-body">
                         <Line
                            data={this.state}
                            options={{
                                title:{
                                display:true,
                                text:'High/Low Humidity Last 7 Days',
                                fontSize:20
                                },
                                legend:{
                                display:true,
                                position:'right'
                                }
                            }}
                            />
                    </div>   
        </div>

    }
}
 
export default ChartHighLowHumidity ;