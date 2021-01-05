import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

//https://stackoverflow.com/questions/29689966/typescript-how-to-define-type-for-a-function-callback-as-any-function-type-no
//https://stackoverflow.com/questions/47561848/property-value-does-not-exist-on-type-readonly
export interface Props {
  onHandleToggleNavPane: () => void;
}

class PageHeader extends Component<Props, {}> {

    render() {
        return <header className="navbar sticky-top flex-md-nowrap p-0 headerBar">
        <a className="navbar-brand me-0 px-3" href="http://redmagenta.co.uk/">
          <span className="logoFirst">RED</span>
          <span className="logoSecond">MAGENTA</span>
          </a>
        {/* <Button onClick={this.props.onHandleToggleNavPane} className="navbar-toggler position-absolute d-md-none collapsed navMenuButton" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon className="navMenuButtonIcon" icon={faBars} />A
        </Button> */}
        
        {/* <span>header</span> */}

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="http://redmagenta.co.uk/">
              <FontAwesomeIcon className="navMenuButtonIcon" icon={faSignOutAlt} size="2x" />
            </a>
          </li>
          <li className="nav-item text-nowrap">
            <Button onClick={this.props.onHandleToggleNavPane} className="navbar-toggler position-absolute d-md-none collapsed navMenuButton" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon className="navMenuButtonIcon" icon={faBars} />B
            </Button>
          </li>
        </ul>
      </header>
    }
}

export default PageHeader;

