import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {connect} from 'react-redux';
import {logInAction, usernameAction} from './actions';
const CLIENT_ID = `${process.env.REACT_APP_CLIENT_ID}`;

class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: '',
      styleLogin: "googleBtn displayInline",
      styleLogout: "googleBtn displayNone",
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken,
        styleLogin: "googleBtn displayNone",
        styleLogout: "googleBtn displayInline",
      }));
    //   this.props.setUserId(response.getId()); //gets unique Google userId
    //   this.props.setUserName(response.profileObj.givenName); //gets unique name
      this.props.logInAction(true);
      this.props.usernameAction(response.profileObj.givenName);
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: '',
      styleLogin: "googleBtn displayInline",
      styleLogout: "googleBtn displayNone",
    }));
    // this.props.setUserId(null);
  }

  handleLoginFailure (response) {
    console.log('Failed to log in');
  }

  handleLogoutFailure (response) {
    console.log('Failed to log out');
  }

//   <div className={this.props.loadingStyle}>
//   <div className="spinner-border text-light" role="status">
//   </div>
//   <br />
//   <span className="text-light loadingText">Loading...</span>
// </div>

  render() {
    return (
    <div>
      <GoogleLogout
          clientId={ CLIENT_ID }
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
          className={this.state.styleLogout}
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
          className={this.state.styleLogin}
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
    }
}

const mapDispatchToProps = {
    logInAction: logInAction,
    usernameAction: usernameAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleBtn);