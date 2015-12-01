'use strict;'

import Reflux from 'reflux';
import { History } from 'react-router';

import UserActions from '../actions/UserActions';

var localStorageKey = 'current-user';

module.exports = Reflux.createStore({
  listenables: [ UserActions ],
  mixins: [ History ],
  init: function() {
    var cached = localStorage.getItem(localStorageKey);
    if (!cached) {
      this.user = {
        status: 'logged-out',
      };
    } else {
      this.user = JSON.parse(cached);
    }
    return this.user;
  },
  onRefreshUser: function(params) {
  },
  onRegisterUserCompleted: function(resp) {
    // FIXME
    this.history.replaceState(null, '/home');
  },
  onRegisterUserFailed: function(resp) {
    alert(resp.status + ':\tfailed to load data:\t' + resp.text);
  },
  onLoginUserCompleted: function(resp) {
    // FIXME
    this.history.replaceState(null, '/home');
  },
  onLoginUserFailed: function(resp) {
    alert(resp.status + ':\tfailed to load data:\t' + resp.text);
  },
  onLogoutUser: function(params) {
  },
  onUpdateProfile: function(params) {
  },
  onChangePassword: function(params) {
  },
});
