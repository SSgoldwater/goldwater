import React from 'react';
import Paper from 'material-ui/Paper';
import ReactMarkdown from 'react-markdown';
import PostStore from '../../stores/PostStore.js';
import Navigation from '../layout/Navigation';
import BreadCrumbs from '../layout/BreadCrumbs';
import styles from './styles/PostViewStyles';

class PostView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  componentDidMount() {
    PostStore.addChangeListener(this._onChange);
    this._onChange();
  }

  componentWillUnmount() {
    PostStore.removeChangeListener(this._onChange);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this._onChange();
    }
  }

  _onChange = () => {
    this.setState({
      post: PostStore.getPostByUuid(this.props.match.params.id)
    });
  }

  render() {
    const _post = this.state.post;

    return (
      _post ? (
        <div style={ styles.container }>
          <Paper
            style={ styles.page }
          >
            <BreadCrumbs 
              match={ [this.props.match] }
            />
            <h1>{ _post.title }</h1>
            <h3>{ _post.subtitle }</h3>
            <ReactMarkdown source={ _post.body } />
            <p>{ `Written by ${ _post.user.name } at ${ _post.created_at }` }</p>
          </Paper>
        </div>
      )
    : 
      ( <h1>No Post</h1> )
    )
  }
}

export default PostView;
