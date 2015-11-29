'use strict';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();

//const isProduction = process.env.NODE_ENV === 'production';
//const port = isProduction ? process.env.PORT : 3000;
const port = 8081;

// Use a copy of the original file
const dataPath = path.resolve(__dirname, 'data');
const commentsFile = path.resolve(dataPath, 'comments.json.tmp'); // '.tmp' is git-ignored


// Folder to to serve public files
// app.use('/', express.static(path.resolve(__dirname, 'public')));


// node.js middleware for handling JSON, Raw, Text and URL encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Run the server
const server = app.listen(port, 'localhost', () => {
  fs.writeFileSync(commentsFile, fs.readFileSync(path.resolve(dataPath, 'comments.json')));
  console.log(`Server running @ http://${server.address().address}:${server.address().port}. Comments: ${commentsFile}`);
});


// Sample API
app.get('/yo', (req, res) => {
  res.send('Yo Express!');
});

app.get('/api/comments.json', (req, res) => {
  fs.readFile(commentsFile, (err, data) => {
    if(err) {
      res.status(404).send('404: "comments.json" not found!');
    }
    else {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  });
});

app.post('/api/comments.json', (req, res) => {
  fs.readFile(commentsFile, (err, data) => {
    const comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile(commentsFile, JSON.stringify(comments, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache');
      res.send(JSON.stringify(comments)); // Don't do this :-)
    });
  });
});
