import React from 'react';
import Navigation from '../layout/Navigation';
import styles from './styles/PostViewStyles';

class PostView extends React.Component {
  constructor(props) {
    super(props)

    console.log(props.match.params.id);
  }

  render() {
    return (
      <div style={ styles.container }>
      </div>
    )
  }
}

export default PostView;
