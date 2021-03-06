import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { Redirect } from 'react-router';
import styles from './styles/PostListItemStyles.js';

class PostListItem extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      redirect: false
    }
  }

  _redirectToPost = () => {
    this.setState({ redirect: true });
  }

  render() {
    const _post = this.props.post;

    return (
      this.state.redirect ? (
        <Redirect to={ `/post/${ this.props.post.uuid }` } />
      ) : (
        <Paper
          style={ styles.container }
          onTouchTap={ this._redirectToPost }
        >
          <h1 style={ styles.title }>{ _post.title }</h1>
          <h5 style={ styles.writtenBy }>Written By: { _post.user.name }</h5>
          <h3>{ _post.body }</h3>
        </Paper>
      )
    )
  }
}

export default PostListItem;
