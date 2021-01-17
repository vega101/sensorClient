import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint } from '@fortawesome/free-solid-svg-icons'

export interface Props {
    value:number
}
 
export interface State {
    currentHumidity : number
}


 
class CurrentHumidityHeadline  extends Component<Props, State> {
    //state = { currentHumidity :  78.8}
    render() { 
        return <div className="headlinePanelOuter currentHumidityPanel card">
               <div className="card-body">
                        <div className="d-flex">
                            <div className="mr-3 align-self-center round round-lg currentHumidityInfo">
                                <span className="text-white">
                                    <FontAwesomeIcon className="text-white circleIcon" icon={faTint} size="lg" />
                                </span>
                            </div>
                            <div>
                                <div className="headlinePanelTitle card-title">Current Humidity</div>
                                <div className="headlinePanelSubTitle">Location 1</div>
                            </div>
                        </div>
                        <div className="mt-2 row">
                            <div className="align-self-center headlinePanelValueWrapper">
                                <span className="headlinePanelValue">{this.props.value}%</span>
                            </div>
                        </div>
                    </div>   
            </div>;
    }
}
 
export default CurrentHumidityHeadline ;