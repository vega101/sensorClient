import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';


// const useStyles = makeStyles({
//   root: {
//     height: 240,
//     flexGrow: 1,
//     maxWidth: 400,
//   },
// });

export interface Props {
  isNavExpanded: boolean,
  onHandleToggleNavPane: (path: string) => void
}

class NavPanel_Working extends Component<Props, {}> { 

  
    render() {
      //const classes = useStyles();

        return <nav id="sidebarMenu" className={`${this.props.isNavExpanded ? '' : 'collapse'} col-md-3 col-lg-2 d-md-block bg-light sidebar`}>
        <div className="position-sticky pt-3">
          <TreeView defaultExpanded={['Location1-Root']}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            <TreeItem nodeId="Location1-Root" label="Location 1">
              <TreeItem nodeId="Location1-CurrentObservations" label="Current Observations" onClick={() => this.props.onHandleToggleNavPane("/")} />
              <TreeItem nodeId="Location1-DetailedData" label="Detailed Data" onClick={() => this.props.onHandleToggleNavPane("/detailedata")} />
              <TreeItem nodeId="Location1-Forecast" label="Forecast" onClick={() => this.props.onHandleToggleNavPane("/forecast")} />
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


          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={() => this.props.onHandleToggleNavPane("/detailedata")} exact activeClassName="sidebarNavLinkActive">Current Observations</NavLink>
              {/* <a className="nav-link active" aria-current="page" href="http://redmagenta.co.uk/">
                <span data-feather="home"></span>
                Dashboard
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/detailedata" onClick={() => this.props.onHandleToggleNavPane("/detailedata")} exact activeClassName="sidebarNavLinkActive">Detailed Data</NavLink>
              {/* <a className="nav-link" href="http://redmagenta.co.uk/">
                <span data-feather="file"></span>
                Orders
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/forecast" onClick={() => this.props.onHandleToggleNavPane("/detailedata")} exact activeClassName="sidebarNavLinkActive">Forecast</NavLink>
              {/* <a className="nav-link" href="http://redmagenta.co.uk/">
                <span data-feather="shopping-cart"></span>
                Products
              </a> */}
            </li>
           
          </ul>        
        </div>
      </nav>
  
    }
}
 
export default NavPanel_Working;