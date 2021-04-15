import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import VideoList from './VideoList';
import Settings from './Settings';
import Header from './Header';
import SearchBar from './SearchBar';
// import VideoPlayer from './VideoPlayer';

axios.defaults.withCredentials = true;

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadMore: false,
      videos: [],
      keyword: '',
      currentVideo: {},
      isSettingsOpen: false,
      isDarkMode: false,
    };
    this.scrollHandler = this.scrollHandler.bind(this);
  }
  componentDidMount() {
    axios
      .post(
        'https://localhost:4611/resource',
        {
          email: this.props.profile.email,
          picture: this.props.profile.picture,
          name: this.props.profile.name,
          refreshToken: this.props.refreshToken,
        },
        {
          headers: {
            Authorization: `accessToken=Bearer ${this.props.accessToken}`,
          },
        }
      )
      .then((body) => {
        console.log(body);
        this.setState({ videos: body.data });
      })
      .catch((err) => {
        console.log(err);
      });

    window.addEventListener('scroll', this.scrollHandler);
  }
  scrollHandler = function () {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    console.log(docHeight, windowBottom);
    if (windowBottom >= docHeight && !this.state.isLoadMore) {
      if (this.props.accessToken) {
        this.setState({ isLoadMore: true });
        axios
          .post(
            `https://localhost:4611/resource/lazyload`,
            { email: this.props.profile.email },
            {
              headers: {
                Authorization: `accessToken=Bearer ${this.props.accessToken}`,
              },
            }
          )
          .then((body) => {
            console.log(body);
            let propVideos = this.state.videos.concat(body.data);
            this.setState({ videos: propVideos, isLoadMore: false });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      console.log('not at bottom');
    }
  };
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }
  handleDarkModeToggle = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };
  handleSettingsToggle = () => {
    this.setState({ isSettingsOpen: !this.state.isSettingsOpen });
  };
  handleKeywordUpdate = (value) => {
    this.setState({ keyword: value }, () => {
      // 키워드가 변경되었습니다. 여기에서 서버로 키워드를 담아 요청을 날리세요.
      console.log('keyword changed');
      axios
        .post('https://localhost:4611/resource/search', {
          keyword: this.state.keyword,
        })
        .then((body) => {
          console.log(body);
          this.setState({ videos: body.data });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  render() {
    const { videos, isSettingsOpen, isDarkMode } = this.state;

    return (
      <div>
        <Header handleSettingsToggle={this.handleSettingsToggle} />
        <SearchBar handleKeywordUpdate={this.handleKeywordUpdate} />
        <div className="videoList">
          {videos.length ? (
            <VideoList videos={videos} profile={this.props.profile} />
          ) : null}
        </div>
        <Settings
          profile={this.props.profile}
          isSettingsOpen={isSettingsOpen}
          isDarkMode={isDarkMode}
          handleLoginToggle={this.props.handleLoginToggle}
          handleSettingsToggle={this.handleSettingsToggle}
          handleDarkModeToggle={this.handleDarkModeToggle}
        />
      </div>
    );
  }
}
export default withRouter(User);
