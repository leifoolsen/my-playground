'use strict';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();

// Use a copy of the original JSON file
const dataPath = path.resolve(__dirname, 'data');
const commentsFile = path.resolve(dataPath, 'comments.json.tmp'); // '.tmp' is git-ignored
fs.writeFileSync(commentsFile, fs.readFileSync(path.resolve(dataPath, 'comments.json')));


// Folder to to serve public files
//app.use('/', express.static(path.resolve(__dirname, 'public')));


// node.js middleware for handling JSON, Raw, Text and URL encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const server = app.listen(8081, 'localhost', () => {
  console.log(
    `Server running @ http://${server.address().address}:${server.address().port}. Comments: ${commentsFile}`);
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
