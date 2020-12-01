import React, { Component } from 'react';
import {DISHES} from '../shared/dishes';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './HomeComponent';


class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }

  }

  render () {

    const HomePage = () => {
      return(
        <Home />
      );
    };
    return (
      <>
          <Header />
          <div className="container">
            <div className="offset-md-2">
              <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                <Redirect to='/home' />
              </Switch>
            </div>
          </div>
          <Footer />
      </>
    );
  }
}

export default Main;