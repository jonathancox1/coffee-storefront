import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Admin from './components/Admin';
import Home from './components/Home';
import Success from './components/Success';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
