'use strict';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';
import config from 'config';

const app = express();

// Use a copy of the original JSON file
const dataPath = path.resolve(__dirname, 'data');
const commentsFile = path.resolve(dataPath, 'comments.json.tmp'); // '.tmp' is git-ignored
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
  console.log(
    `Express server running @ http://${server.address().address}:${server.address().port}. Comments: ${commentsFile}`);
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

  // Maybe rewite this messy code
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


/*
 // server.js. Pre Babel6
 // Corect bootstrap is now i 'package.json', scripts
 'use strict';
 require('babel-core/register');      // ES6 in Express. Note: '.babelrc' is also required
 require('./api/express-server.js');  // Load Express server
 */
