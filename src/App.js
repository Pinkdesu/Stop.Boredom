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
import Portal from './utils/portal';

library.add(fab);

const App = () =>  {

  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isModalActive, changeModal] = useState(false);

  const setActive = () => {
    changeModal(!isModalActive);
  }

  const authenticate = (cb) => {
    cb();
    setAuthenticated(true);
  }

  const signOut = (cb) => {
    cb();
    setAuthenticated(false);
  }

  return (
      <>
        <Header setActive={setActive} 
                isAuthenticated={isAuthenticated}/>

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

            <Route
              render={({ location }) =>
                isAuthenticated ? (
                  <>
                    <UserPage signOut={ cb => signOut(cb)}/>
                    <Footer/>
                  </>
                  ) : 
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

        {isModalActive && 
          <Portal>
            <LoginPage setActive={setActive}
                       authenticate={cb => authenticate(cb)}/>
          </Portal>
        }
      </>
  );
}

export default App;
