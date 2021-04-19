import React from 'react';
import Video from './Video';
import './Video.css';

const VideoList = ({ videos, total, profile }) => {
  return (
    <>
      <h3 className="whosid">{profile.name}님의 좋아요 동영상 리스트입니다.</h3>
      <div className="media">
        {videos.length !== total ? (
          <ul>
            {videos.map((video) => (
              <Video key={video.id} video={video} />
            ))}
          </ul>
        ) : (
          <ul>
            {videos.map((video) => (
              <Video key={video.id} video={video} />
            ))}
            <div>더이상의 동영상이 없습니다.</div>
          </ul>
        )}
      </div>
    </>
  );
};

export default VideoList;

// <div className={this.props.darkMode ? 'video-list darkMode' : 'video-list'}>
