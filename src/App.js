import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "./actions/actionCreator";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import queryString from "query-string";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import CollaborationPage from "./components/collaboration-page/collaboration-page";
import NewsFeed from "./components/news-feed/news-feed";
import ErrorPage from "./components/error-page/error-page";
import LoginPage from "./components/login-page/login-page";
import UserPage from "./components/user-page/user-page";
import Portal from "./utils/portal";
import PlacesPage from "./components/places-page/places-page";

library.add(fab, fas);

const App = () => {
  const login = useSelector(state => state.login);
  let location = useLocation();
  let path = queryString.parse(location.search);

  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <>
            <Main />
            <Footer />
          </>
        </Route>

        <Route path="/places">
          <>
            <PlacesPage />
            <Footer />
          </>
        </Route>

        <Route path="/collaboration">
          <>
            <CollaborationPage />
            <Footer />
          </>
        </Route>

        <Route path="/feed">
          <NewsFeed />
        </Route>

        <Route
          path="/user"
          render={({ location }) =>
            login.isAuth ? (
              <>
                <UserPage />
                <Footer />
              </>
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  search: "?login=true",
                  state: { from: location }
                }}
              />
            )
          }
        />

        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>

      {(path.login || path.registration) && (
        <Portal>
          <LoginPage
            isLoginFormActive={path.login && !path.registration}
            isRegFormActive={!path.login && path.registration}
          />
        </Portal>
      )}
    </>
  );
};

export default App;
