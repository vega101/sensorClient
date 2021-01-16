import React from "react";

interface Props {
    handleMyClick: (path: string) => void
   }

const TestBtnCtrl: React.SFC<Props> = (props) => {
  
  return <button onClick={() => props.handleMyClick("my param!")}>Click Me!</button>
    
}

export default TestBtnCtrl;