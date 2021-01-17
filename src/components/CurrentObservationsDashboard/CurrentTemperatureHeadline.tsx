import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons'

export interface Props {
    value: number
}
 
export interface State {
    currentTemperature : number
}
 
class CurrentTemperatureHeadline  extends Component<Props, State> {
    //state = { currentTemperature :  21.1}
    render() { 
        return <div className="headlinePanelOuter currentTemperaturePanel card">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="mr-3 align-self-center round round-lg currentTemperatureInfo">
                                <span className="text-white">
                                    <FontAwesomeIcon className="text-white circleIcon" icon={faThermometerHalf} size="lg" />
                                </span>
                            </div>
                            <div>
                                <div className="headlinePanelTitle card-title">Current Temperature</div>
                                <div className="headlinePanelSubTitle">Location 1</div>
                            </div>
                        </div>
                        <div className="mt-2 row">
                            <div className="align-self-center headlinePanelValueWrapper">
                                <span className="headlinePanelValue">{this.props.value}c</span>
                            </div>
                        </div>
                    </div>   
        </div>

    }
}
 
export default CurrentTemperatureHeadline ;