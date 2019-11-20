import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from './actions/actionCreator';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import queryString from 'query-string';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import CollaborationPage from './components/collaboration-page/collaboration-page';
import NewsFeed from './components/news-feed/news-feed';
import ErrorPage from './components/error-page/error-page';
import LoginPage from './components/login-page/login-page';
import UserPage from './components/user-page/user-page';
import Portal from './utils/portal';
import PlacesPage from './components/places-page/places-page';
import { isClassPrivateMethod } from '@babel/types';

library.add(fab);

const App = ({login, loginRequest }) =>  {

  let location = useLocation();
  let path = queryString.parse(location.search);

  return (
      <>
        <Header/>

        <Switch>
            <Route exact path='/'>
              <>
                <Main/>
                <Footer/>
              </>
            </Route> 

            <Route path='/places'>
              <>
                <PlacesPage/>
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

            <Route path='/user'
              render={({ location }) =>
                login.isAuth ? (
                  <>
                    <UserPage />
                    <Footer/>
                  </>
                  ) : 
                  (<Redirect
                    to={{
                      pathname: '/',
                      search: '?login=true',
                      state: { from: location }
                    }}
                  />)
              }
            />

            <Route path='*'>
              <ErrorPage/>
            </Route>
        </Switch>

        {path.login && 
          <Portal>
            <LoginPage isLoginFormActive={path.login}
                       isRegFormActive={!path.login}/>
          </Portal>
        }

        {path.registration && 
          <Portal>
            <LoginPage isLoginFormActive={!path.registration}
                       isRegFormActive={path.registration}/>
          </Portal>
        }
      </>
  );
}

const mapStateToProps = state => ({
  login: state.login
});

export default connect(mapStateToProps)(App);
