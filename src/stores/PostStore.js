import Axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';
import PostConstants from '../constants/PostConstants';
import BaseStore from './BaseStore';
import Post from '../models/Post';
import config from '../configs/config';

const CHANGE_EVENT = "change";

class PostStore extends BaseStore {
  constructor(props) {
    super(props);

    this.posts = [];

    this._getPosts().then((res) => { 
      this.posts = res;
      this.emitChange();
    });
  }

  _addPost = (props) => {
    this.posts.push(new Post(props));
  }

  _updatePost = (newPost) => {
    this.posts = this.posts.map((post) => {
      if (post.id == newPost.id) {
        post.text = newPost.text
        return post
      } else { return post }
    })
  }

  _deletePost = (post) => {
    this.posts = this.posts.filter((_post) => {
      return post.id != _post.id;
    })
  }

  _getPosts = () => {
    return new Promise((resolve, reject) => {
      Axios.get(`${config.dbUrl}/api/posts`)
        .then((response) => {
          const _posts = response.data.posts.map((post) => {
            return new Post(post);
          })

          resolve(_posts);
        });
    });
  }

  getPosts = () => {
    return this.posts;
  }

  getPostByUuid = (uuid) => {
    return this.posts.find((post) => {
      return post.uuid == uuid;
    });
  }
}

const _PostStore = new PostStore();

_PostStore.dispatchToken = AppDispatcher.register((payload) => {
  switch (payload.type) {
    case PostConstants.CREATE_TODO:
      _PostStore._addPost(payload.data);
      _PostStore.emitChange();
      break;
    case PostConstants.UPDATE_TODO:
      _PostStore._updatePost(payload.data);
      _PostStore.emitChange();
      break;
    case PostConstants.DELETE_TODO:
      _PostStore._deletePost(payload.data);
      _PostStore.emitChange();
    default:
  }
})

export default _PostStore;
