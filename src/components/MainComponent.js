import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';


class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      comments: COMMENTS,
      leaders: LEADERS
    }

  }

  render () {

    const HomePage = () => {
      return(
        <Home 
          dish = {this.state.dishes.filter((dish)=>dish.featured)[0]}
          promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}
          leader = {this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    return (
      <>
          <Header />
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Route exact path='/contact' component={Contact} />
            <Redirect to='/home' />
          </Switch>
          <Footer />
      </>
    );
  }
}

export default Main;