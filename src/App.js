import {Navbar, NavbarBrand} from 'reactstrap';
import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import {dishes} from './shared/dishes';


class App extends Component{
  render () {
    return (
      <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand>CodeFry</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={dishes} />
      </div>
    );
  }
}

export default App;