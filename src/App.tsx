import React, { useState } from "react";
import PageHeader from "./components/PageHeader";
import NavPanel from "./components/NavPanel";
import SubContainer from "./components/SubContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
    BrowserRouter as Router
  } from "react-router-dom";

const App = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
 
  //const handleSetIsNavExpanded = (event: { target: { value: React.SetStateAction<boolean>; }; }) => setIsNavExpanded(event.target.value);
  const handleToggleNavPane = (path: string) => {
    setIsNavExpanded(!isNavExpanded);
  };

  return <React.Fragment>
    <Router>
        <PageHeader onHandleToggleNavPane={handleToggleNavPane}></PageHeader>   
    
        <div className="container-fluid">
            <div className="row">
                <NavPanel onHandleToggleNavPane={handleToggleNavPane} isNavExpanded={isNavExpanded}></NavPanel>
                <SubContainer></SubContainer>       
            </div>
        </div>
    </Router>
    </React.Fragment>
    
}

export default App;