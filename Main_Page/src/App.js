import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './page/Login';
import User from './page/User';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      profile: {},
      acc_token: '',
      ref_token: '',
    };
  }

  // componentDidMount() {
  //   window.addEventListener('scroll', handler);
  //   function handler(e) {
  //     console.log(
  //       e.target.scrollHeight - e.target.scrollTop,
  //       e.target.clientHeight
  //     );
  //   }
  // }
  handleLoginToggle = (acc, ref) => {
    this.setState({
      isLogin: !this.state.isLogin,
      acc_token: acc,
      ref_token: ref,
    });
  };
  handleProfileUpdate = (data) => {
    this.setState({ profile: data });
  };
  render() {
    const { isLogin, profile, storage } = this.state;

    return (
      <div>
        <Switch>
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                handleLoginToggle={this.handleLoginToggle.bind(this)}
                handleProfileUpdate={this.handleProfileUpdate}
              />
            )}
          />
          <Route
            exact
            path="/user"
            render={() => {
              if (isLogin) {
                return (
                  <User
                    handleLoginToggle={this.handleLoginToggle.bind(this)}
                    profile={profile}
                    accessToken={this.state.acc_token}
                    refreshToken={this.state.ref_token}
                  />
                );
              }
              return <Redirect to="/login" />;
            }}
          />
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                return <Redirect to="/user" />;
              }
              return <Redirect to="/login" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
