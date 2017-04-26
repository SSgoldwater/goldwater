import Axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ToDoConstants from '../constants/ToDoConstants';
import BaseStore from './BaseStore';
import ToDo from '../models/ToDo';
import config from '../configs/config';

const CHANGE_EVENT = "change";

class ToDoStore extends BaseStore {
  constructor(props) {
    super(props);

    this.todos = [];

    this._getToDos().then((res) => { 
      this.todos = res;
      this.emitChange();
    });
  }

  _addToDo = (props) => {
    this.todos.push(new ToDo(props.id, props.text));
  }

  _updateToDo = (newToDo) => {
    this.todos = this.todos.map((todo) => {
      if (todo.id == newToDo.id) {
        todo.text = newToDo.text
        return todo
      } else { return todo }
    })
  }

  _deleteToDo = (todo) => {
    this.todos = this.todos.filter((_todo) => {
      return todo.id != _todo.id;
    })
  }

  _getToDos = () => {
    return new Promise((resolve, reject) => {
      Axios.get(`${config.dbUrl}/api/todos`)
        .then((response) => {
          const _todos = response.data.todos.map((todo) => {
            return new ToDo(todo.id, todo.text);
          })

          resolve(_todos);
        });
    });
  }

  getToDos = () => {
    return this.todos;
  }
}

const _ToDoStore = new ToDoStore();

_ToDoStore.dispatchToken = AppDispatcher.register((payload) => {
  switch (payload.type) {
    case ToDoConstants.CREATE_TODO:
      _ToDoStore._addToDo(payload.data);
      _ToDoStore.emitChange();
      break;
    case ToDoConstants.UPDATE_TODO:
      _ToDoStore._updateToDo(payload.data);
      _ToDoStore.emitChange();
      break;
    case ToDoConstants.DELETE_TODO:
      _ToDoStore._deleteToDo(payload.data);
      _ToDoStore.emitChange();
    default:
  }
})

export default _ToDoStore;
