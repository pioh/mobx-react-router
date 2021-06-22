import {makeAutoObservable} from 'mobx';

export class RouterStore {
  constructor() {
    this.location = null;
    this.history = null;
    makeAutoObservable(this);
  }

  _updateLocation(newState) {
    this.location = newState;
  }

  /*
   * History methods
   */
  push = (location, state) => {
    this.history.push(location, state);
  };

  replace = (location, state) => {
    this.history.replace(location, state);
  };

  go = (n) => {
    this.history.go(n);
  };

  goBack = () => {
    this.history.goBack();
  };

  goForward = () => {
    this.history.goForward();
  };
};
