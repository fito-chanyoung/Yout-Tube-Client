import React from "react"; //
import { useHistory } from "react-router-dom";

import "../css/videoPlayer.css";
export interface PlayerProps {
  currentVideo: any;
  darkMode: boolean;
  handleRemoveVideoPlayer: React.MouseEventHandler<HTMLButtonElement>;
  resetHandler: Function;
}

export const VideoPlayer: React.FC<PlayerProps> = ({
  currentVideo,
  darkMode,
  handleRemoveVideoPlayer,
  resetHandler,
}) => {
  const { videoId, title, description, channelId } = currentVideo;

  function resetVideo() {
    resetHandler({});
  }
  function removeVideo() {
    handleRemoveVideoPlayer(currentVideo);
    resetHandler({});
  }
  return (
    <div className={darkMode ? "VideoPlayer darkmode" : "VideoPlayer"}>
      <div>
        <div className="iframe-wrapper">
          <iframe
            frameBorder="0"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          ></iframe>
        </div>
        <hr />
        <div className="video-desc">
          <h2>제목: {title}</h2>
          <button
            onClick={removeVideo}
            style={{
              float: "right",
            }}
          >
            &times;
          </button>
          <button
            className="reset"
            onClick={resetVideo}
            style={{
              float: "right",
            }}
          >
            reset
          </button>
        </div>
        <hr />
        <div>{description}</div>
      </div>
    </div>
  );
};
