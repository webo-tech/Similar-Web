import React from "react";
import YouTube from "react-youtube";

export default ({ updatePlaylist, currentSongId }) => {
  function onStateChange({ data: state }) {
    if (state === 0) {
      updatePlaylist("delete", currentSongId);
    }
  }

  return (
    <YouTube
      onStateChange={onStateChange}
      videoId={currentSongId}
      opts={{
        height: "400",
        width: "640",
        playerVars: {
          autoplay: 1,
        },
      }}
    />
  );
};
