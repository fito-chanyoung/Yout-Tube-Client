import React from "react";
import { Video } from "./Video";
import { profileInterface } from "../App";

import "../css/Video.css";

export interface VideoListProps {
  videos: any;
  total: number;
  profile: profileInterface;
  isDarkMode: boolean;
  onclickHandler: any;
  handleRemovePlayList: React.MouseEventHandler<HTMLButtonElement>;
  isSearched: boolean;
  makeDefault: React.MouseEventHandler<HTMLButtonElement>;
}

export const VideoList: React.FC<VideoListProps> = ({
  videos,
  total,
  profile,
  isDarkMode,
  onclickHandler,
  handleRemovePlayList,
  isSearched,
  makeDefault,
}) => {
  return (
    <div className="list-container">
      <h3 className="whosid">{profile.name}님의 좋아요 동영상 리스트입니다.</h3>
      <span>
        {isSearched ? (
          <button className="search-revoke" onClick={makeDefault}>
            돌아가기
          </button>
        ) : (
          ""
        )}
      </span>
      <div className="media">
        {videos.length !== total ? (
          <div>
            {videos.map((video: any) => (
              <Video
                key={video.id}
                video={video}
                isDarkMode={isDarkMode}
                onclickHandler={onclickHandler}
                handleRemovePlayList={handleRemovePlayList}
              />
            ))}
          </div>
        ) : (
          <div>
            {videos.map((video: any) => (
              <Video
                key={video.id}
                video={video}
                isDarkMode={isDarkMode}
                onclickHandler={onclickHandler}
                handleRemovePlayList={handleRemovePlayList}
              />
            ))}
            <div className="end">
              <div>더이상의 동영상이 없습니다.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoList;

// <div className={this.props.darkMode ? 'video-list darkMode' : 'video-list'}>
