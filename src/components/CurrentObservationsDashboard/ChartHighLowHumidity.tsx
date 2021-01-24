import React, { Component } from "react";
import {Line} from 'react-chartjs-2';
import {IDataSetItem, IDataHighLowItem} from "../../Interfaces";

export interface Props {
  value: {
    high: Array<IDataHighLowItem>,
    low: Array<IDataHighLowItem>
  }
}
 
export interface State {
    labels: Array<string>,
    datasets: Array<IDataSetItem>
}
 
class ChartHighLowHumidity  extends Component<Props, State> {
    state = this.getStateObject([], [], []);
    days: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
          dataLow.push(item.value);
        });

        this.setState(this.getStateObject(labels, dataHigh, dataLow));

      }

   }

   getFormattedDate(item: IDataHighLowItem){
    let dateArr = item.date.split("-");
    let itemDate = new Date(Number(dateArr[0]), Number(dateArr[1]), Number(dateArr[2]))
    let day = itemDate.getDay();
    let dayOfWeek = this.days[day];
    return dayOfWeek;
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
                                display:false,
                                position:'right'
                                }
                            }}
                            />
                    </div>   
        </div>

    }
}
 
export default ChartHighLowHumidity ;