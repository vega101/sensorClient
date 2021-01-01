import React, { Component } from "react";
import PageHeader from "./components/PageHeader";
import NavPanel from "./components/NavPanel";
import SubContainer from "./components/SubContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
    BrowserRouter as Router
  } from "react-router-dom";
 
class App  extends Component {  
    render() {
       return <React.Fragment>
            <Router>
                <PageHeader></PageHeader>   

                <div className="container-fluid">
                    <div className="row">
                        <NavPanel></NavPanel>
                        <SubContainer></SubContainer>       
                    </div>
                </div>
            </Router>
        </React.Fragment>
        
    }
}
 
export default App ;