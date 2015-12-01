'use strict;'

import React, { Component } from 'react';
import { LinkedStateMixin } from 'react-addons';
import { History } from 'react-router';
import Reflux from 'reflux';

import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

import template from './templates/RegistrationForm.rt';


function emailIsValid(email) {
}

function passwordIsValid(password) {
}

module.exports = React.createClass({
  mixins: [ History, LinkedStateMixin ],
  getInitialState: function() {
    return {
      user: {},
      email: null,
      password: null,
      confirm_password: null,
    };
  },
  handleSubmit: function(event) {
    UserActions.registerUser({
      email: this.state.email,
      password: this.state.password
    });
  },
  handleCancel: function(event) {
    this.history.goBack();
  },
  render: template
});
