import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav>
  <NavItem eventKey={1} href="#">
    Link
  </NavItem>
  <NavItem eventKey={2} href="#">
    Link
  </NavItem>
  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
    <MenuItem eventKey={3.1}>Action</MenuItem>
    <MenuItem eventKey={3.2}>Another action</MenuItem>
    <MenuItem eventKey={3.3}>Something else here</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey={3.3}>Separated link</MenuItem>
  </NavDropdown>
</Nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Default</Button>

 {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
 <Button bsStyle="primary">Primary</Button>

 {/* Indicates a successful or positive action */}
 <Button bsStyle="success">Success</Button>

 {/* Contextual button for informational alert messages */}
 <Button bsStyle="info">Info</Button>

 {/* Indicates caution should be taken with this action */}
 <Button bsStyle="warning">Warning</Button>

 {/* Indicates a dangerous or potentially negative action */}
 <Button bsStyle="danger">Danger</Button>

 {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
 <Button bsStyle="link">Link</Button>
      </div>
    );
  }
}

export default App;
