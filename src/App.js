import React, { Fragment } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App({ children }) {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        { children }
        <Switch>
          <Route exact path='/' component={Footer}/>
          <Route path='/collaboration' component={Footer}/>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
