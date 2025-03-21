// ---------------------- CommonJs ----------------------

// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html'); //plain
//   res.end('<h1>Helloshjdfhbsdhjfhbsdffsdfsdfjdsfsjhfdhs</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// npm  i express jsonwebtoken dotenv

// if you cant restart the server again and again..
// 1) npm install --global nodemon
// 2) nodemon main.js // server run 
// 3) node -v // version check

// https://github.com/nvm-sh/nvm

// $ nvm use 16
// Now using node v16.9.1 (npm v7.21.1)
// $ node -v
// v16.9.1
// $ nvm use 14
// Now using node v14.18.0 (npm v6.14.15)
// $ node -v
// v14.18.0
// $ nvm install 12
// Now using node v12.22.6 (npm v6.14.5)
// $ node -v
// v12.22.6


// -------------------------------------------

// const { createServer } = require('node:http');
// const fs = require("fs");

// import http from "http"

// fs.readSync();
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html'); //plain
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// "type": "commonjs", // try in json file



// import http from "http"



const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
