import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Case1 from './Case1';
import Case2 from './Case2';
import Case3 from './Case3';
import Home from './Home';

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/case1" component={Case1}/>
        <Route exact path="/case2" component={Case2}/>
        <Route exact path="/case3" component={Case3}/>
      </Switch>
    </React.Fragment>
  </BrowserRouter>
)

export default Router;