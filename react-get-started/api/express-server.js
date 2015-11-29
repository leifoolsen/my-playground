'use strict';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();

//const isProduction = process.env.NODE_ENV === 'production';
//const port = isProduction ? process.env.PORT : 3000;
const port = 3000;

app.use('/', express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Run the server
const server = app.listen(port, 'localhost', () => {
  console.log(`Server running @ http://${server.address().address}:${server.address().port}`);
});

app.get('/yo', (req, res) => {
  res.send('Yo Express!');
});

app.get('/api/comments.json', (req, res) => {
  fs.readFile(path.resolve(__dirname, 'comments.json'), (err, data) => {
    if(err) {
      res.status(404).send('404: "comments.json" not found!');
    }
    else {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  });
});
