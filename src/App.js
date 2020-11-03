import React, {useReducer} from 'react';
import { Route } from 'react-router-dom';
import { withRouter, Switch, } from 'react-router';
import {useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import apiCall from './services/network.js'
import './App.css';
import {ROUTES} from './services/constants.js'
// 

import Home from './containers/Home';

function App() {
  return (
    <div className="app">
      <Switch>
      	<Route exact path={ROUTES.HOME} component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
