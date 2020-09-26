const router = require('express').Router();
const playlistRoutes = require('./modules/playlist/playlist.routes');

router.use('/playlist', playlistRoutes);

module.exports = router;
