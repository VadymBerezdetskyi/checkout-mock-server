const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const router = require('./router/index');

const server = express();
const corsPolicy = cors({ origin: true });
const jsonParser = bodyparser.json();
const urlencoded = bodyparser.urlencoded({ extended: false });

// Plugins
server.use(corsPolicy);
server.use(jsonParser);
server.use(urlencoded);

// Router
server.use('/', router);

// 404
server.get('*', (_: any, response: any) => response.status(404).json({ success: false }));


export default server;