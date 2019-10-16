import React, { Fragment } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/main/main';
import CollaborationPage from './components/collaboration-page/collaboration-page';
import NewsFeed from './components/news-feed/news-feed';
import ErrorPage from './components/error-page/error-page';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />

        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/collaboration' component={CollaborationPage}/>
            <Route path='/feed' component={NewsFeed}/>
            <Route path='*' component={ErrorPage}/>
        </Switch>

        <Switch>
            <Route exact path='/' component={Footer}/>
            <Route path='/collaboration' component={Footer}/>
        </Switch>

      </Fragment>
    </BrowserRouter>
  );
}

export default App;
