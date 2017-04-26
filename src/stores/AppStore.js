import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import AppConstants from '../constants/AppConstants';
import BaseStore from './BaseStore';

class AppStore extends BaseStore {
  constructor(props) {
    super(props);

    this._platform = null;
    this._fb = null;
  }
  getPlatform = () => {
    return this._platform;
  }

  setPlatform = (platform) => {
    this._platform = platform;
  }

  getFB = () => {
    return this._fb;
  }

  setFB = (fb) => {
    this._fb = fb;
  }
}

const _AppStore = new AppStore();

_AppStore.disptachToken = AppDispatcher.register((payload) => {
  switch (payload.type) {
    case AppConstants.SET_PLATFORM:
      _AppStore.setPlatform(payload.platform);
      _AppStore.emitChange();
      break;
    case AppConstants.SET_FB:
      _AppStore.setFB(payload.fb);
      _AppStore.emitChange();
      break;
    default:
  }
})

export default _AppStore;
