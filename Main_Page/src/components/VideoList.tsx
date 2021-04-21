import React from "react";
import { Video } from "./Video";
import { profileInterface } from "../App";

import "../css/Video.css";

export interface VideoListProps {
  videos: any;
  total: number;
  profile: profileInterface;
  isDarkMode: boolean;
}

export const VideoList: React.FC<VideoListProps> = ({
  videos,
  total,
  profile,
  isDarkMode,
}) => {
  return (
    <>
      <h3 className="whosid">{profile.name}님의 좋아요 동영상 리스트입니다.</h3>
      <div className="media">
        {videos.length !== total ? (
          <div>
            {videos.map((video: any) => (
              <Video key={video.id} video={video} isDarkMode={isDarkMode} />
            ))}
          </div>
        ) : (
          <div>
            {videos.map((video: any) => (
              <Video key={video.id} video={video} isDarkMode={isDarkMode} />
            ))}
            <div className="end">
              <div>더이상의 동영상이 없습니다.</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VideoList;

// <div className={this.props.darkMode ? 'video-list darkMode' : 'video-list'}>
