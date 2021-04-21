import React from "react"; //

export interface PlayerProps {
  currentVideo: any;
  darkMode: boolean;
  handleRemoveVideoPlayer: React.MouseEventHandler<HTMLButtonElement>;
}

export const VideoPlayer: React.FC<PlayerProps> = ({
  currentVideo,
  darkMode,
  handleRemoveVideoPlayer,
}) => {
  const { videoId, title, description, channelId } = currentVideo;

  return (
    <div className={darkMode ? "VideoPlayer darkmode" : "VideoPlayer"}>
      <div>
        <button
          onClick={handleRemoveVideoPlayer}
          style={{
            float: "right",
          }}
        >
          &times;
        </button>
      </div>
      <div className="">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
        ></iframe>
        <h2>제목: {title}</h2>
        <div>채널: {channelId}</div>
        <div>설명: {description}</div>
      </div>
    </div>
  );
};
