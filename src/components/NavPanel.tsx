import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export interface Props {
  isNavExpanded: boolean,
  onHandleToggleNavPane: () => void;
}

class NavPanel extends Component<Props, {}> {
   
    render() { 
        return <nav id="sidebarMenu" className={`${this.props.isNavExpanded ? '' : 'collapse'} col-md-3 col-lg-2 d-md-block bg-light sidebar`}>
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={this.props.onHandleToggleNavPane} exact activeClassName="sidebarNavLinkActive">Current Observations</NavLink>
              {/* <a className="nav-link active" aria-current="page" href="http://redmagenta.co.uk/">
                <span data-feather="home"></span>
                Dashboard
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/detailedata" onClick={this.props.onHandleToggleNavPane} exact activeClassName="sidebarNavLinkActive">Detailed Data</NavLink>
              {/* <a className="nav-link" href="http://redmagenta.co.uk/">
                <span data-feather="file"></span>
                Orders
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/forecast" onClick={this.props.onHandleToggleNavPane} exact activeClassName="sidebarNavLinkActive">Forecast</NavLink>
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
 
export default NavPanel;