import React from "react";
import "../css/Video.css";

export interface VideoProps {
  video: any;
  isDarkMode: boolean;
}

export const Video: React.FC<VideoProps> = ({ isDarkMode, video }) => {
  return (
    <div className={isDarkMode ? "contents darkmode" : "contents"}>
      <div className="img-container">
        <img className="thumbnail-img" src={video.thumbnail} alt="thumbnail" />
      </div>
      <div className="textdata">
        <h4 className="title">{video.title}</h4>
        <div className="description">{video.description}</div>
      </div>
    </div>
  );
};

export default Video;
