import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReportWebVitals from './report-web-vitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UsersListPage } from './users-list';
import { AddUser } from './pages/add-user-page';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql-client';
import { UserDetailsPage } from './pages/user-details-page';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path='/' exact={true} component={App} />
          <Route path='/users' component={UsersListPage} />
          <Route path='/add-user' component={AddUser} />
          <Route path='/user' component={UserDetailsPage} />
        </Switch>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReportWebVitals();
