import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../components/App';
import Main from '../components/main/Main';
import Login from '../components/layout/Login';
import theme from './Theme.js';

const FWRouter = (
  <MuiThemeProvider muiTheme={ theme }>
    <Router>
      <div>
        <Route path="/" component={ App }/>
        <Route path="/main" component={ Main }/>
        <Route path="/login" component={ Login }/>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default FWRouter;
