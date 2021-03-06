import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { bindActionCreators } from 'redux';
import { getLogon } from '../actions/index';
import Button from '../components/button/container';
import Input from '../components/input/container'
import Cta from '../components/cta/container';
require('./sass/userLogon.scss');

class UserLogon extends Component {
  render() {

    const className = cx({
        'logon': true,
        [`logon--style-${this.props.style}`]: this.props.style !== undefined
    });

    return (
      <div className={className}>
        <img className="logo" src="../assets/logo.svg"/>
        <div className="form">
          <Input text="USERNAME" inputType="text"/>
          <Input text="PASSWORD" inputType="password"/>
          <Button isLink={false} text="Sign In" style='wide' />
          <Cta text="Forgot password?" link="/forgottenpassword" style="forgottenPassword"/>
          <div className="newUser">
            <label>New user?</label>
            <Cta text="Register here." link="/register"/>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLogon }, dispatch)
}

function mapStateToProps(state) {
  return { logon: state.logonReducer }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogon);
