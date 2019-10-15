import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

function App() {
  return (
  	<BrowserRouter>
    <div className="container">
      <Switch>
      	<Route path="/" exact component={Home} />
      	<Route path="/login" exact component={Login} />
      	<Route path="/register" exact component={Register} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
