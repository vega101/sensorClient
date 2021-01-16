import React from "react";
import TestBtnCtrl from "./TestBtn";


const App_FunctionalWorking = () => {
  
  //const handleSetIsNavExpanded = (event: { target: { value: React.SetStateAction<boolean>; }; }) => setIsNavExpanded(event.target.value);
  const handleChange = (path: string) => {
      alert(path)

  };


  return <React.Fragment>
      <TestBtnCtrl handleMyClick={handleChange}></TestBtnCtrl>
    </React.Fragment>
    
}



export default App_FunctionalWorking;