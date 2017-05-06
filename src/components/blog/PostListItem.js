import React from 'react';
import Paper from 'material-ui/Paper';
import styles from './styles/PostListItemStyles.js';

class PostListItem extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    const _post = this.props.post
    return (
      <Paper
        style={ styles.container }
      >
        <h1 style={ styles.title }>{ _post.title }</h1>
        <h5 style={ styles.writtenBy }>Written By: Stanley</h5>
        <h3>{ _post.body }</h3>
      </Paper>
    )
  }
}

export default PostListItem;
