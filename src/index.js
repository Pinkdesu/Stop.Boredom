import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from "./store";
import { Provider } from 'react-redux';

import './index.scss';
import App from './App';

ReactDOM.render((<Provider store={store}>
                    <App />
                </Provider>),  document.getElementById('root'));

serviceWorker.unregister();
