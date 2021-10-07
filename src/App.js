import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GroupList from './GroupList';
import GroupEdit from './GroupEdit';
import Login from './Component/Login';
import AboutGuideDog from './Component/AboutGuideDog';
import AboutUs from './Component/AboutUs';
import DogApplication from './Component/DogApplication';
import AdoptionApplication from './Component/AdoptionApplication';

class App extends Component{
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/groups' exact={true} component={GroupList}/>
          <Route path='/groups/:id' component={GroupEdit}/>
          <Route path='/login' component={Login}/>
          <Route path='/aboutDog' component={AboutGuideDog}/>
          <Route path='/aboutUs' component={AboutUs} />
          <Route path='/dogApplication' component={DogApplication}/>
          <Route path='/adoptionApplication' component={AdoptionApplication}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
