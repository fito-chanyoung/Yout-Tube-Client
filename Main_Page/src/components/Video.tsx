import React from "react";
import "../css/Video.css";

export interface VideoProps {
  video: any;
}

export const Video: React.FC<VideoProps> = ({ video }) => {
  return (
    <div className="contents">
      <img
        className="thumbnail-img"
        width="250px"
        src={video.thumbnail}
        alt="thumbnail"
      />
      <div className="textdata">
        <h4 className="title">{video.title}</h4>
        <div className="description">{video.description}</div>
      </div>
    </div>
  );
};

export default Video;
