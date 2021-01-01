import React, { Component } from "react";
import {
    Switch,
    Route
  } from "react-router-dom";
 
class SubContainer extends Component {
   
    render() { 
        return <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Switch>
                    <Route path="/about">
                        <h1>About</h1>
                    </Route>
                    <Route path="/users">
                        <h1>Users</h1>
                    </Route>
                    <Route path="/">
                        <h1>Home</h1>
                    </Route>
            </Switch>
         </main>
    }
}
 
export default SubContainer;