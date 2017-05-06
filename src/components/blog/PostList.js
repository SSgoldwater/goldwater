import React from 'react';
import Paper from 'material-ui/Paper';
import PostStore from '../../stores/PostStore.js';
import Navigation from '../layout/Navigation';
import BreadCrumbs from '../layout/BreadCrumbs';
import PostListItem from './PostListItem';
import styles from './styles/PostListStyles';

class PostList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: this.props.match,
      posts: PostStore.getPosts()
    }
  }

  componentDidMount() {
    PostStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    PostStore.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState({ posts: PostStore.getPosts() });
  }

  render() {
    console.log(this.state.posts);
    const _posts = this.state.posts.map((post, i) => {
      return (
        <PostListItem
          key={ i }
          post={ post }
        />
      )
    });

    return (
      <div style={ styles.container }>
        <Paper style={ styles.page }>
          <BreadCrumbs
            match={ [this.state.filter] }
          />
          { _posts }
        </Paper>
      </div>
    )
  }
}

export default PostList;
