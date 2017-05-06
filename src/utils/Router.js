import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../components/App';
import Navigation from '../components/layout/Navigation';
import Welcome from '../components/layout/Welcome';
import Login from '../components/layout/Login';
import PostView from '../components/blog/PostView';
import PostList from '../components/blog/PostList';
import theme from './Theme.js';

const _Router = () => {
  return (
    <MuiThemeProvider muiTheme={ theme }>
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={ App }/>
          <Route path="/welcome" component={ Welcome }/>
          <Route path="/login" component={ Login }/>
          <Route path="/posts/:filter" component={ PostList }/>
          <Route path="/post/:id" component={ PostView }/>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default _Router();
