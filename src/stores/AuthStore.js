import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import AuthConstants from '../constants/AuthConstants';
import BaseStore from './BaseStore';

class AuthStore extends BaseStore {
  constructor(props) {
    super(props);

    this._currentUser = {
      id: "",
      token: "",
      name: "none",
      picUrl: ""
    }
  }

  getUser = () => {
    return this._currentUser;
  }

  setUser = (user) => {
    this._currentUser = user;
    this.emitChange();
  }
}

const _AuthStore = new AuthStore();

_AuthStore.dispatchToken = AppDispatcher.register((payload) => {
  switch (payload.type) {
    case AuthConstants.SET_USER:
      _AuthStore.setUser(payload.userData);
      break;
    default:
  }
})

export default _AuthStore;
