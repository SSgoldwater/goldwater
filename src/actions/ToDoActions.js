import AppDispatcher from '../dispatcher/AppDispatcher';
import ToDoConstants from '../constants/ToDoConstants';
import Axios from 'axios';
import config from '../configs/config';

const ToDoActions = {
  createToDo: (data) => {
    Axios.post(config.dbUrl + '/api/todos/add', {
        text: data.text,
      })
      .then(function (response) {
        console.log(response);
        AppDispatcher.dispatch({
          type: ToDoConstants.CREATE_TODO,
          data: Object.assign(data, response.data)
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  updateToDo: (data) => {
    Axios.put(`${config.dbUrl}/api/todos/${data.id}`, data)
      .then(function (response) {
        console.log(response);
        AppDispatcher.dispatch({
          type: ToDoConstants.UPDATE_TODO,
          data: data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  deleteToDo: (id) => {
    return () => {
    Axios.delete(`${config.dbUrl}/api/todos/${id}`)
    .then(function (response) {
      console.log(response);
      AppDispatcher.dispatch({
        type: ToDoConstants.DELETE_TODO,
        data: id
      });
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}

export default ToDoActions;
