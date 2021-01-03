import React, { Component } from "react";
import CurrentObservations from "./CurrentObservations";

import {
    Switch,
    Route
  } from "react-router-dom";
 
class SubContainer extends Component {
   
    render() { 
        return <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Switch>
                    <Route path="/detailedata">
                        <h1>Detailed Data</h1>
                    </Route>
                    <Route path="/forecast">
                        <h1>Forecast</h1>
                    </Route>
                    <Route path="/">
                        <h1>Current Observations</h1>
                        <CurrentObservations></CurrentObservations>
                    </Route>
            </Switch>
         </main>
    }
}
 
export default SubContainer;