import { EventEmitter } from 'events';
import Axios from 'axios';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ToDoConstants from '../constants/ToDoConstants';
import config from '../configs/config';

const CHANGE_EVENT = "change";
let _todos = [];

class ToDoStore extends EventEmitter {
  constructor(props) {
    super(props);

    this.getInitialFeed().then((res) => { 
      _todos = res;
      this.emitChange();
    });
  }

  emitChange = () => {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener = (callback) => {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener = (callback) => {
    this.removeListener(CHANGE_EVENT, callback);
  }

  _updateToDo = (data) => {
    _todos = _todos.map((todo) => {
      if (todo.id == data.id) {
        todo.text = data.text
        return todo
      } else { return todo }
    })
  }

  _deleteToDo = (id) => {
    _todos = _todos.filter((todo) => {
      return todo.id != id;
    })
  }

  getInitialFeed = () => {
    return new Promise((resolve, reject) => {
      Axios.get(`${config.dbUrl}/api/todos`)
        .then((response) => {
          resolve(response.data.todos);
        });
    });
  }

  getToDos = () => {
    return _todos;
  }
}

const _ToDoStore = new ToDoStore();

_ToDoStore.dispatchToken = AppDispatcher.register((payload) => {
  switch (payload.type) {
    case ToDoConstants.CREATE_TODO:
      _todos.push(payload.data);
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
