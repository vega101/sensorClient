import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons'

export interface Props {
    
}
 
export interface State {
    currentTemperature : number
}
 
class HighLowTemperatureHeadline  extends Component<Props, State> {
    state = { currentTemperature :  21.1}
    render() { 
        return <div className="headlinePanelOuter hignLowTemperaturePanel card">
                     <div className="card-body">
                        <div className="d-flex">
                            <div className="mr-3 align-self-center round round-lg hignLowTemperatureInfo">
                                <span className="text-white">
                                    <FontAwesomeIcon className="text-white circleIcon" icon={faThermometerHalf} size="lg" />
                                </span>
                            </div>
                            <div>
                                <div className="headlinePanelTitle card-title">High/Low Temperature Last 24 Hours</div>
                                <div className="headlinePanelSubTitle">Location 1</div>
                            </div>
                        </div>
                        <div className="mt-2 row">
                            <div className="align-self-center headlinePanelValueWrapper">
                                <span className="headlinePanelValue">High: 21.1c / Low: 18.4</span>
                            </div>
                        </div>
                    </div>    
        </div>

    }
}
 
export default HighLowTemperatureHeadline ;