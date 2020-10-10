import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from './store';
import Main from "./weatherChecker/components/Main";
import Details from './weatherChecker/components/Details';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:direction?" component={Details} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;