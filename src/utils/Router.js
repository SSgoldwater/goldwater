import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../components/App';
import Welcome from '../components/layout/Welcome';
import Login from '../components/layout/Login';
import theme from './Theme.js';

const _Router = () => {
  return (
    <Router>
      <MuiThemeProvider muiTheme={ theme }>
        <div>
          <Route path="/" component={ App }/>
          <Route path="/welcome" component={ Welcome }/>
          <Route path="/login" component={ Login }/>
        </div>
      </MuiThemeProvider>
    </Router>
  );
};

export default new _Router();
