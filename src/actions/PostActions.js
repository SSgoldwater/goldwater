import AppDispatcher from '../dispatcher/AppDispatcher';
import PostConstants from '../constants/PostConstants';
import Axios from 'axios';
import config from '../configs/config';

const PostActions = {
  createPost: (data) => {
    Axios.post(config.dbUrl + '/api/post/add', {
        text: data.text,
      })
      .then(function (response) {
        AppDispatcher.dispatch({
          type: PostConstants.CREATE_TODO,
          data: Object.assign(data, response.data)
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  updatePost: (data) => {
    Axios.put(`${config.dbUrl}/api/post/${data.id}`, data)
      .then(function (response) {
        AppDispatcher.dispatch({
          type: PostConstants.UPDATE_TODO,
          data: data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  deletePost: (post) => {
    return () => {
    Axios.delete(`${config.dbUrl}/api/post/${post.id}`)
    .then(function (response) {
      AppDispatcher.dispatch({
        type: PostConstants.DELETE_TODO,
        data: post
      });
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}

export default PostActions;
