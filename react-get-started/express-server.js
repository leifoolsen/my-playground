"use strict";

import express from 'express';
import path from 'path';
const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname, 'public');

// We point to our static assets
app.use(express.static(publicPath));

// And run the server
const server = app.listen(port, 'localhost', () => {
  console.log(`Server running @ http://${server.address().address}:${server.address().port}`);
});

app.get('/', (req, res) => {
  res.send('Hello Node Express!!');
});

app.get('/yo', (req, res) => {
  res.send('YO!');
});
