import React, { Component } from "react";
import {Line} from 'react-chartjs-2';

export interface Props {
    
}
 
export interface State {
    currentTemperature : number
}

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
 
class ChartTemperature  extends Component<Props, State> {

    //state = { currentTemperature :  21.1}

    // componentWillReceiveProps(newProps:Props) {
    //   console.log("chart data!")
    // }

    componentDidUpdate(prevProps: Props, prevState: Props) {
      console.log('Component DID UPDATE!', prevProps, prevState)
   }

    render() { 
        return <div className="headlinePanelOuter currentTemperaturePanel card">
                    <div className="card-body">
                         <Line
                            data={state}
                            options={{
                                title:{
                                display:true,
                                text:'Average Rainfall per month',
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
 
export default ChartTemperature ;