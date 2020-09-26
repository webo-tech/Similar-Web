import React from "react";
import { List, message } from "antd";
import AddVideo from "./AddVideo/AddVideo";
import { PlayButton, PlaylistWrapper } from "./style";

export default ({ playlist, updatePlaylist, setCurrentSongId }) => {
  function renderSongItem(songId, idx) {
    return (
      <List.Item>
        <div>
          {idx + 1}) <span>{songId}</span>
          <PlayButton onClick={() => setCurrentSongId(songId)} size="small">
            play
          </PlayButton>
        </div>
      </List.Item>
    );
  }

  async function addNewSong(songUrl = "") {
    const songId = songUrl.split("?v=")[1];
    if (!songId) {
      return message.error("Invalid song url");
    }
    try {
      await updatePlaylist("add", songId);
    } catch (err) {
      return message.error("failed to add song to playlist");
    }
  }
  return (
    <PlaylistWrapper>
      <AddVideo addNewSong={addNewSong} />
      <List bordered dataSource={playlist} renderItem={renderSongItem} />
    </PlaylistWrapper>
  );
};
