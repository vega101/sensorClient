import React, { Component } from "react";
import PageHeader from "./components/PageHeader";
import NavPanel from "./components/NavPanel";
import SubContainer from "./components/SubContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
    BrowserRouter as Router
  } from "react-router-dom";
 
  interface stateInterface {
    isNavExpanded: boolean;
  }

class App  extends Component<{}, stateInterface> {
    setIsNavExpanded: (isNavExpanded: boolean) => void;  
    
    constructor(props: object) {
        super(props);
        // this.state = {
        //   isNavExpanded: false
        // };

        this.state= {isNavExpanded: false} as stateInterface;
      
        this.setIsNavExpanded = (isNavExpanded: boolean) => {
          this.setState({ isNavExpanded: isNavExpanded });
        }             
      }
     
    handleToggleNavPane = () => {
        this.setIsNavExpanded(!this.state.isNavExpanded);
        
    }

    render() {
       return <React.Fragment>
            <Router>
                <PageHeader onHandleToggleNavPane={this.handleToggleNavPane}></PageHeader>   

                <div className="container-fluid">
                    <div className="row">
                        <NavPanel onHandleToggleNavPane={this.handleToggleNavPane} isNavExpanded={this.state.isNavExpanded}></NavPanel>
                        <SubContainer></SubContainer>       
                    </div>
                </div>
            </Router>
        </React.Fragment>
        
    }
}
 
export default App ;