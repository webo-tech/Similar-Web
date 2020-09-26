require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const routes = require('./routes');

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser({ extended: true, limit: '20mb' }));

app.get('/ping', (req, res) => res.send({ ping: 'pong' }));
app.use('/api', routes);

app.use(errorHandler);

const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
