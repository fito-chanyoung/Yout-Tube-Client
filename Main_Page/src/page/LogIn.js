import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './Login.css';
import s4 from './s4.gif';

// To allow receiving & sending cookies by a CORS request successfully.
axios.defaults.withCredentials = true;
class Login extends Component {
  constructor(props) {
    super(props);
  }
  handleAuthSuccess = ({code}) => {
console.log(code)
    axios
      .post('https://localhost:4611/auth/login', { authCode: code })
      .then(res => {
        
        const { email, name, picture, accessToken,refreshToken } = res.data;
        console.log(res.data)
        this.props.handleLoginToggle(accessToken, refreshToken);
        this.props.handleProfileUpdate({ email, name, picture });
        this.props.history.push('/user');
      })
      .catch(err => {
        console.log(err.error);
        return;
      });
  };
  handleAuthFailure = ({ error }) => {
    console.log(error); // log error code (https://www.npmjs.com/package/react-google-login#onfailure-callback)
    this.props.history.push('/login');
    // 유저에게 인증 실패 피드백 -> 모달 (advanced)
  };
  render() {
    return (
      <div className="container">
        <div className="left-sector">
          <img src={s4} className="s4" />
        </div>
        <div className="right-sector">
          <GoogleLogin
            className="button"
            type="button"
            buttonText="Sign in with Google"
            cookiePolicy={ 'single_host_origin' }
            clientId="176713763841-ubebta3hn7miiai19ot8h10tfllq6gdj.apps.googleusercontent.com" //client ID는 config.js라는 폴더 안의 동명의 파일 안에 있음.하람님 아이디.
            onSuccess={this.handleAuthSuccess}
            onFailure={this.handleAuthFailure}
            scope="https://www.googleapis.com/auth/youtube"
            prompt="consent" // 첫 로그인이 아니더라도 강제로 refresh 토큰을 발행하게 함 - https://github.com/anthonyjgrove/react-google-login/issues/144
            responseType="code" // get auth_code (Default value 'permission' is to get access_token directly)
            accessType="offline" // to get access_token & refresh_token together
            // isSignedIn? // if you needed
          />
          <p className="comment">This is YourTube.</p>
          <p className="comment2">What did you Like recently?</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
