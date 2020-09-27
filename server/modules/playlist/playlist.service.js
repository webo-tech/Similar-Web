let playlistDB = [];

function getPlaylist() {
  return playlistDB;
}

function deleteSongFromPlaylist(songId) {
  playlistDB = playlistDB.filter((id) => id !== songId);
}

function addSongToPlaylist(songId) {
  if (!playlistDB.some((id) => id === songId)) {
    playlistDB.push(songId);
  }
}

module.exports = { getPlaylist, deleteSongFromPlaylist, addSongToPlaylist };
