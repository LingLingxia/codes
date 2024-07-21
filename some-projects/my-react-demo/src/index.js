import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router,Route,Redirect } from 'react-router-dom'
ReactDOM.render(
  <Router>
    <Route path='/' component={App}>
        
    </Route>
  </Router>,
  document.getElementById('root')
);
