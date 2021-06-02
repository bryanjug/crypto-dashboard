import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {connect} from 'react-redux';
import {logInAction, usernameAction, styleLoginAction, styleLogoutAction, userIdAction, favoriteRemoveIconStyleAction} from '../redux/actions';
const CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;

class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.props.logInAction(true);
      this.props.usernameAction(response.profileObj.givenName);
      this.props.styleLoginAction("googleBtn displayNone");
      this.props.styleLogoutAction("googleBtn displayInline");
      this.props.userIdAction(response.getId());
      this.props.favoriteRemoveIconStyleAction("bi bi-dash-circle favoriteRemoveIcon");
    }
  }

  logout (response) {
    this.props.logInAction(false);
    this.props.styleLoginAction("googleBtn displayInline");
    this.props.styleLogoutAction("googleBtn displayNone");
    this.props.favoriteRemoveIconStyleAction("displayNone");
  }

  handleLoginFailure (response) {
    console.log(response);
    console.log('Failed to log in');
  }

  handleLogoutFailure (response) {
    console.log('Failed to log out');
  }

  render() {
    return (
    <div>
      <GoogleLogout
          clientId={ CLIENT_ID }
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
          className={this.props.styleLogout}
          isSignedIn={true}
          icon={false}
      >
        <span className="googleText navText">Welcome, {this.props.username}.</span>
      </GoogleLogout>
      <GoogleLogin
          clientId={ CLIENT_ID }
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          isSignedIn={true}
          className={this.props.styleLogin}
          icon={false}
      >
        <i className="bi bi-google navIcon googleIcon"></i>
        <span className="googleText navText">Login</span>
      </GoogleLogin>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.isLoggedIn,
      username: state.username,
      styleLogin: state.styleLogin,
      styleLogout: state.styleLogout,
      userId: state.userId,
    }
}

const mapDispatchToProps = {
    logInAction: logInAction,
    usernameAction: usernameAction,
    styleLoginAction: styleLoginAction,
    styleLogoutAction: styleLogoutAction,
    userIdAction: userIdAction,
    favoriteRemoveIconStyleAction: favoriteRemoveIconStyleAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleBtn);