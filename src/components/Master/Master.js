import React, { useState, useEffect } from "react";
import axios from "axios";
import YoutubePlayer from "../YoutubePlayer/YoutubePlayer";
import Playlist from "../Playlist/Playlist";
import { Layout, FlexWrapper } from "./style";

const PLAYLIST_BASE_URL = "/api/playlist/v1";
const SIMILAR_WEB_LOGO_URL =
  "https://financesonline.com/uploads/2019/08/SimilarWeb_logo1.png";

export default () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSongId, setCurrentSongId] = useState("");

  useEffect(() => {
    updatePlaylist();
  }, []);

  async function updatePlaylist(action, songId) {
    if (action === "delete") {
      const songIndex = playlist.indexOf(songId);
      await axios.delete(`${PLAYLIST_BASE_URL}/${songId}`);
      if (playlist.length > 1 && songIndex < playlist.length) {
        setCurrentSongId(playlist[songIndex + 1]);
      }
    } else if (action === "add") {
      await axios.post(PLAYLIST_BASE_URL, { songId });
    }

    const updatedPlaylist = await axios
      .get(PLAYLIST_BASE_URL)
      .then((res) => res.data.playlist);
    setPlaylist(updatedPlaylist);
  }

  return (
    <Layout>
      <div>
        <FlexWrapper>
          <img alt="similar-logo" src={SIMILAR_WEB_LOGO_URL} />
        </FlexWrapper>
      </div>
      <FlexWrapper>
        <Playlist
          playlist={playlist}
          updatePlaylist={updatePlaylist}
          setCurrentSongId={setCurrentSongId}
        />
        <YoutubePlayer
          updatePlaylist={updatePlaylist}
          currentSongId={currentSongId}
        />
      </FlexWrapper>
    </Layout>
  );
};
