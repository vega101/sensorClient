import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

//https://stackoverflow.com/questions/29689966/typescript-how-to-define-type-for-a-function-callback-as-any-function-type-no
//https://stackoverflow.com/questions/47561848/property-value-does-not-exist-on-type-readonly
export interface Props {
  onHandleToggleNavPane: () => void;
}

class PageHeader extends Component<Props, {}> {

    render() {
        return <Navbar className="sticky-top headerBar">
        <Navbar.Brand href="http://redmagenta.co.uk/">
          <span className="logoFirst">RED</span>
          <span className="logoSecond">MAGENTA</span>
        </Navbar.Brand>
        
          <Nav  className="ml-auto">
            
            <Nav.Link className="nav-link" href="http://redmagenta.co.uk/">
              <FontAwesomeIcon className="navMenuButtonIcon" icon={faSignOutAlt} size="lg" />
            </Nav.Link>
            <Form inline>
              <Button onClick={this.props.onHandleToggleNavPane} className="navMenuButton" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon className="navMenuButtonIcon" icon={faBars}  size="lg" />
              </Button>
            </Form>

          </Nav>
      </Navbar>
    }
}

export default PageHeader;

