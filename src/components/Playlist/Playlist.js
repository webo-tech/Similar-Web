import React from "react";
import { List, message, Popconfirm } from "antd";
import AddVideo from "./AddVideo/AddVideo";
import { PlaylistWrapper, PlayAndRemoveWrapper, SongActionButton } from "./style";

export default ({ playlist, updatePlaylist, setCurrentSongId }) => {
  function renderSongItem(songId, idx) {
    return (
      <List.Item>
        <div>
          {idx + 1}) <span>{songId}</span>
          <PlayAndRemoveWrapper>
            <SongActionButton type="primary" onClick={() => setCurrentSongId(songId)} size="small">
              play
          </SongActionButton>
            <Popconfirm okText="yes" title="would you like to remove the song?" onConfirm={() => updatePlaylist('delete', songId)}>
              <SongActionButton type="danger" size="small">
                remove
          </SongActionButton>
            </Popconfirm>
          </PlayAndRemoveWrapper>
        </div>
      </List.Item>
    );
  }

  async function addNewSong(songUrl = "") {
    const songId = songUrl.split("=")[1].split('&')[0];
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
      <List
        bordered dataSource={playlist}
        renderItem={renderSongItem}
        locale={{ emptyText: "Add Songs to Playlist" }} />
    </PlaylistWrapper>
  );
};
