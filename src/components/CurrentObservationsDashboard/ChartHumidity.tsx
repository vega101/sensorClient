import React, { Component } from "react";
import {Line} from 'react-chartjs-2';
import {IDataSetItem, IDataItem} from "../../Interfaces";

export interface Props {
  value: Array<IDataItem>
}
 
export interface State {
    labels: Array<string>,
    datasets: Array<IDataSetItem>
}

 
class ChartHumidity  extends Component<Props, State> {
    state = this.getStateObject([], []);

    componentDidUpdate(prevProps: Props, prevState: State) {
      if (prevProps.value !== this.props.value) {

        let labels: string[] = [];
        let data: number[] = [];

        this.props.value.forEach(item => {
          let itemDate = new Date(item.date * 1000);
          let hours = itemDate.getHours();
          let day = itemDate.getDate();   
          let month = itemDate.getMonth() + 1;         
          let year = itemDate.getFullYear();
          
          let formattedDate =  `${day}/${month}/${year} ${hours}:00`; 
          labels.push(formattedDate);
          data.push(item.value);
        });

        this.setState(this.getStateObject(labels, data));
      }
   }

   getStateObject(labels: Array<string>, data: Array<number>){
      return {
        labels: labels,
        datasets: [
          {
            label: 'Humidity',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: '#4a99c7',
            borderWidth: 2,
            data: data
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
                                text:'Humidity Last 24 Hours',
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
 
export default ChartHumidity ;