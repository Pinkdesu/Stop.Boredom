import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import CollaborationPage from './components/collaboration-page/collaboration-page';
import NewsFeed from './components/news-feed/news-feed';
import ErrorPage from './components/error-page/error-page';
import LoginPage from './components/login-page/login-page';
import UserPage from './components/user-page/user-page';

library.add(fab);

const App = () =>  {

  const [isAuthenticated, SetAuthenticated] = useState(false);
  
  const Authenticate = (cb) => {
    SetAuthenticated(true);
    setTimeout(cb, 100);
  }

  const SignOut = (cb) => {
    SetAuthenticated(false);
    setTimeout(cb, 100);
  }

  return (
      <>
        <Header />

        <Switch>
            <Route exact path='/'>
              <>
                <Main/>
                <Footer/>
              </>
            </Route> 

            <Route path='/collaboration'>
              <>
                <CollaborationPage/>
                <Footer/>
              </>
            </Route>

            <Route path='/feed'>
              <NewsFeed/>
            </Route>

            <Route path='/login'>
              <LoginPage Authenticate={(cb) => Authenticate(cb)}/>
            </Route>

            <Route
              render={({ location }) =>
                isAuthenticated ? (<UserPage SignOut={ cb => SignOut(cb) }/>) : 
                  (<Redirect
                    to={{
                      pathname: "/login",
                      state: { from: location }
                    }}
                  />)
              }
            />

            <Route path='*'>
              <ErrorPage/>
            </Route>
        </Switch>
      </>
  );
}

export default App;
