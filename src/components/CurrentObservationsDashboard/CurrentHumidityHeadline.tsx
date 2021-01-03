import React, { Component } from "react";

export interface Props {
    
}
 
export interface State {
    currentHumidity : number
}
 
class CurrentTemperature  extends Component<Props, State> {
    state = { currentHumidity :  78.8}
    render() { 
        return <div className="headlinePanel currentHumidityPanel">
                <h2 className="headlinePanelText">{this.state.currentHumidity}</h2>
            </div>;
    }
}
 
export default CurrentTemperature ;