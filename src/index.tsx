import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReportWebVitals from './report-web-vitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' exact={true} component={App}/>
        <Route path='/new'>
          <h1>Logged successfully</h1>  
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReportWebVitals();
