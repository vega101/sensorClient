import React from "react";
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { useHistory } from "react-router-dom";

export interface Props {
  isNavExpanded: boolean,
  onHandleToggleNavPane: (path: string) => void
}

const NavPanel: React.SFC<Props> = (props) =>  {
  //setIsNavExpanded: (isNavExpanded: boolean) => void; 
  const history = useHistory();

  const handleOnClick = (path: string) => {
      //window.location.href = path; ///detailedata
    history.push(path);
    props.onHandleToggleNavPane(path);
  };
   
     
      //const classes = useStyles();

        return <nav id="sidebarMenu" className={`${props.isNavExpanded ? '' : 'collapse'} col-md-3 col-lg-2 d-md-block bg-light sidebar`}>
        <div className="position-sticky pt-3">
          <TreeView defaultExpanded={['Location1-Root']}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem nodeId="Location1-Root" label="Location 1">
              <TreeItem nodeId="Location1-CurrentObservations" label="Current Observations" onClick={() => handleOnClick("/")} />
              <TreeItem nodeId="Location1-DetailedData" label="Detailed Data" onClick={() => handleOnClick("/detailedata")} />
              <TreeItem nodeId="Location1-Forecast" label="Forecast" onClick={() => handleOnClick("/forecast")} />
            </TreeItem>
            {/* <TreeItem nodeId="5" label="Documents">
              <TreeItem nodeId="10" label="OSS" />
              <TreeItem nodeId="6" label="Material-UI">
                <TreeItem nodeId="7" label="src">
                  <TreeItem nodeId="8" label="index.js" />
                  <TreeItem nodeId="9" label="tree-view.js" />
                </TreeItem>
              </TreeItem>
            </TreeItem> */}
          </TreeView>

       
        </div>
      </nav>
  
    
}
 
export default NavPanel;