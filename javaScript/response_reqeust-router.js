// firstly run in terminal: npm init -y, npm i express@4
// when start nodemon main.js

import express from 'express';

const app = express();
const port = 3000; 

app.use(express.static("public"))

// app.get('/', (req, res) => {
//     console.log("this is a get request");
//   res.send('Hello World!');
// });

// app.post('/', (req, res) => {
//     console.log("this is a post request");
//     res.send('Hello World!');
//   });

//   app.put('/', (req, res) => {
//     console.log("this is a put request");
//     res.send('Hello World Put!');
//   });

app.get('/', (req, res) => {
  console.log("this is a get request");
res.send('Hello World!');
}).post('/', (req, res) => {
  console.log("this is a post request");
  res.send('Hello World!');
}).put('/', (req, res) => {
  console.log("this is a put request");
  res.send('Hello World Put!');
});

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});