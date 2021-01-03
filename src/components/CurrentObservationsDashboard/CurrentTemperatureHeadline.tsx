import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons'

export interface Props {
    
}
 
export interface State {
    currentTemperature : number
}
 
class CurrentTemperature  extends Component<Props, State> {
    state = { currentTemperature :  21.1}
    render() { 
        return <div className="currentTemperaturePanel card">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="mr-3 align-self-center">
                                <h1 className="text-white">
                                    <FontAwesomeIcon icon={faThermometerHalf} />
                                </h1>
                            </div>
                            <div>
                                <div className="text-white card-title">Current Temperature</div>
                                <div className="text-white op-5 card-subtitle">Location 1</div>
                            </div>
                        </div>
                        <div className="mt-2 row">
                            <div className="align-self-center col-4 headlinePanelValueWrapper">
                                <span className="headlinePanelValue">21.1c</span>
                            </div>
                        </div>
                    </div>   
        </div>

        
        // return <div className="headlinePanel currentHumidityPanel">
        //         <h2 className="headlinePanelText">{this.state.currentTemperature}</h2>
        //     </div>;
    }
}
 
export default CurrentTemperature ;