import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
//https://stackoverflow.com/questions/29689966/typescript-how-to-define-type-for-a-function-callback-as-any-function-type-no
//https://stackoverflow.com/questions/47561848/property-value-does-not-exist-on-type-readonly
export interface Props {
  onHandleToggleNavPane: () => void;
}

class PageHeader extends Component<Props, {}> {

    render() {
        return <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="http://redmagenta.co.uk/">Company name</a>
        <Button onClick={this.props.onHandleToggleNavPane} className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Button>
        
        <span>header</span>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="http://redmagenta.co.uk/">Sign out</a>
          </li>
        </ul>
      </header>
    }
}

export default PageHeader;

