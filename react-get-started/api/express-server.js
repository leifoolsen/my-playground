'use strict';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';
import config from 'config';
import morgan from 'morgan';
import logger from './winston-logger.js';


const app = express();

logger.debug("Overriding 'Express' logger");
app.use(morgan('combined', {stream: logger.stream}));

// Use a copy of the original JSON file
const dataPath = path.resolve(__dirname, 'data');
const commentsFile = path.resolve(dataPath, 'comments.json.tmp'); // '.tmp' is git-ignored

logger.debug(`Comments store: ${commentsFile}`);
fs.writeFileSync(commentsFile, fs.readFileSync(path.resolve(dataPath, 'comments.json')));


// Folder to to serve public files
// We're only using this server as a rest server - so not needed
//app.use('/', express.static(path.resolve(__dirname, 'public')));


// node.js middleware for handling JSON, Raw, Text and URL encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = config.get('express.server.port');
const host = config.get('express.server.host');
const server = app.listen(port, host, () => {
  logger.info(`Express server running @ http://${server.address().address}:${server.address().port}`);
});


// Sample API
app.get('/yo', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json( {yo: 'Yo Express!'} );
});


app.get('/api/comments.json', (req, res) => {
  fs.readFile(commentsFile, (err, data) => {
    if(err) {
      console.error(err);
      res.status(500).send(JSON.stringify(err));
    }
    else {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  });
});

app.post('/api/comments.json', (req, res) => {

  // Maybe rewrite this messy code
  fs.readFile(commentsFile, (err, data) => {
    if(err) {
      console.error(err);
      res.status(500).send(JSON.stringify(err));
    }
    else {
      const comments = JSON.parse(data);
      comments.push(req.body);
      fs.writeFile(commentsFile, JSON.stringify(comments, null, 4), (err) => {
        if(err) {
          console.error(err);
          res.status(500).send(JSON.stringify(err));
        }
        else {
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'no-cache');
          res.send(JSON.stringify(req.body));
        }
      });
    }
  });
});


app.get('/api/client-log', (req, res) => {
  logger.info('********** GET client log: ' + req.param('msg'));
  res.send('');
});

app.post('/api/client-log.json', (req, res) => {
  logger.info('********** POST client log: ' + req.body);
});





/*
 // server.js. Pre Babel6
 // Corect bootstrap is now i 'package.json', scripts
 'use strict';
 require('babel-core/register');      // ES6 in Express. Note: '.babelrc' is also required
 require('./api/express-server.js');  // Load Express server
 */
