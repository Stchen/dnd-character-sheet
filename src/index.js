import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { store, history} from './store';
import { Provider } from 'react-redux';
import { Route, Switch, Router} from 'react-router-dom';
//import { ConnectedRouter } from 'react-router-redux';

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>

), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
