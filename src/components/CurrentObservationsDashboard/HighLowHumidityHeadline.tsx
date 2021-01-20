import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint } from '@fortawesome/free-solid-svg-icons'

export interface Props {
    value:{
        highValue: number,
        lowValue: number
      }   
}
 
export interface State {
    currentHumidity : number
}
 
class HighLowHumidityHeadline  extends Component<Props, State> {
    state = { currentHumidity :  78.8}
    render() { 
        return <div className="headlinePanelOuter highLowHumidityPanel card">
                <div className="card-body">
                            <div className="d-flex">
                                <div className="mr-3 align-self-center round round-lg highLowHumidityInfo">
                                    <span className="text-white">
                                        <FontAwesomeIcon className="text-white circleIcon" icon={faTint} size="lg" />
                                    </span>
                                </div>
                                <div>
                                    <div className="headlinePanelTitle card-title">High/Low Humidity</div>
                                    <div className="headlinePanelSubTitle">Location 1</div>
                                </div>
                            </div>
                            <div className="mt-2 row">
                                <div className="align-self-center headlinePanelValueWrapper">
                                    <span className="headlinePanelValue">High: {this.props.value.highValue}% / Low: {this.props.value.lowValue}%</span>
                                </div>
                            </div>
                        </div>  
            </div>;
    }
}
 
export default HighLowHumidityHeadline ;