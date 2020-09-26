const playlistController = require('./playlist.controller');
const playlistRoutes = require('express').Router();
const playlistRoutesV1 = require('express').Router();

playlistRoutes.use('/v1', playlistRoutesV1);

playlistRoutesV1.get('/', playlistController.getPlaylist);
playlistRoutesV1.post('/', playlistController.addSongToPlaylist);
playlistRoutesV1.delete('/:songId', playlistController.deleteSongFromPlaylist);

module.exports = playlistRoutes;
