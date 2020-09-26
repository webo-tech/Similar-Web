const playlistService = require('./playlist.service');

const SONG_ID_REQUIRED = 'song id is required';

async function getPlaylist(req, res, next) {
  const playlist = playlistService.getPlaylist();
  return res.json({ playlist });
}

async function addSongToPlaylist(req, res, next) {
  const { songId } = req.body;
  if (!songId) {
    return next(Error(SONG_ID_REQUIRED));
  }
  playlistService.addSongToPlaylist(songId);
  return res.status(201).end();
}

async function deleteSongFromPlaylist(req, res, next) {
  const { songId } = req.params;
  if (!songId) {
    return next(Error(SONG_ID_REQUIRED));
  }
  playlistService.deleteSongFromPlaylist(songId);
  return res.status(204).end();
}

module.exports = { getPlaylist, addSongToPlaylist, deleteSongFromPlaylist };
