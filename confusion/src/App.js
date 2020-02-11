import React, {Component} from 'react';

import { DISHES } from './shared/dishes';

import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

import './App.css';
import { render } from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      // these are all React elements: JSX
      // shorthand notation to express JS function calls which evaluate to JS objects.
      // merge UI logic with rendering logic
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
  
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
