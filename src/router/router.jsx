import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Outer from './../components/compouterbody/outer.jsx';
import Main from './../components/landingpage/main.jsx';
import Card from './../components/vendorcard/vendorcard.jsx';
import Login from './../components/logincomponent/login.jsx';

export default class MainRouter extends React.Component{
  render(){
    return(
      <div>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/products" exact component={Outer} />
        <Route path="/adminlogin" exact component={Login} />
        
      </Switch>
      </div>
    )
  }
}