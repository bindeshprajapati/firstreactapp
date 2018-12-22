import React, { Component } from 'react';
import './App.css';
import RegistrationContainer from './Registration/RegistrationContainer'
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
          <NavItem eventKey="1" href="/home">
            NavItem 1 content
          </NavItem>
          <NavItem eventKey="2" title="Item">
            NavItem 2 content
          </NavItem>
          <NavItem eventKey="3" disabled>
            NavItem 3 content
          </NavItem>
          <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
            <MenuItem eventKey="4.1">Action</MenuItem>
            <MenuItem eventKey="4.2">Another action</MenuItem>
            <MenuItem eventKey="4.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <div name="RegistrationContainer"><RegistrationContainer /></div>
      </div>
    );
  }
}

export default App;