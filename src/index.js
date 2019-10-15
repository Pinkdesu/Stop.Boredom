import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/main/main';
import CollaborationPage from './components/collaboration-page/collaboration-page';
import NewsFeed from './components/news-feed/news-feed';
import ErrorPage from './components/error-page/error-page';

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/collaboration' component={CollaborationPage}/>
                <Route path='/feed' component={NewsFeed}/>
                <Route path='*' component={ErrorPage}/>
            </Switch>
        </App>
    </BrowserRouter>),  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
