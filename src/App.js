import React, { Fragment } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import CollaborationPage from './components/collaboration-page/collaboration-page';
import NewsFeed from './components/news-feed/news-feed';
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
