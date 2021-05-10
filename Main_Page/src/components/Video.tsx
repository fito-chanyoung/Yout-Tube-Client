import React from "react";
import "../css/Video.css";

export interface VideoProps {
  video: any;
  isDarkMode: boolean;
  onclickHandler: any;
  handleRemovePlayList: React.MouseEventHandler<HTMLButtonElement>;
}

export const Video: React.FC<VideoProps> = ({
  isDarkMode,
  video,
  onclickHandler,
  handleRemovePlayList,
}) => {
  function onclick(e: any) {
    console.log("ets");
    onclickHandler(video);
  }
  function onRemove() {
    handleRemovePlayList(video);
  }
  return (
    <div
      className={
        isDarkMode ? "contents-container darkmode" : "contents-container"
      }
    >
      <div className="contents" onClick={onclick}>
        <div className="img-container">
          <img
            className="thumbnail-img"
            src={video.thumbnail}
            alt="thumbnail"
          />
        </div>
        <div className="textdata">
          <h4 className="title">{video.title}</h4>
          <div className="description">
            {video.description
              ? video.description.slice(0, 100).concat("...")
              : ""}
          </div>
        </div>
      </div>
      <div
        style={{
          right: "0",
          float: "right",
        }}
      >
        <button className="reset" onClick={onRemove}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Video;
