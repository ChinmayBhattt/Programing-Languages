const express = require('express');
const app = express();
const port = 3001; // Changed port number
app.use(express.static('public')) //http://127.0.0.1:3001/cb.txt


// app.get request => http://127.0.0.1:3001
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// app.get('/about', (req, res) => {
//   res.send('about us!');
// });
// // http://127.0.0.1:3001/about

// app.get('/contact', (req, res) => {
//   res.send('contact us');
// });
// // http://127.0.0.1:3001/contact

// app.get('/blog', (req, res) => {
//   res.send('Blog Page');
// });
// http://127.0.0.1:3001/blog

// app.get('/blog/welcome', (req, res) => {
//   res.send('welcome to Blog Page');
// });

// app.get('/blog/:slug', (req, res) => {
//   res.send(`Hello ${req.params.slug}`);
// }); // http://127.0.0.1:3001/blog/welcome-to-the-club

// app.get('/blog/:slug/:second', (req, res) => {
//   console.log(req);
  
//   res.send(`Hello ${req.params.slug} and ${req.params.second}`);
// });



// app.get('/blog/:slug/:second/:third', (req, res) => {
//   res.send(`Hello ${req.params.slug} and ${req.params.second} and ${req.params.third}`);
// }); // http://127.0.0.1:3001/blog/welcome/world/intro


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Query Parameters: (q:) => q=hey&oq=hey&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIKCAEQABixAxiABDIKCAIQABixAxiABDIKCAMQLhixAxiABDIKCAQQLhixAxiABDINCAUQABixAxiABBiKBTIQCAYQABiDARixAxiABBiKBTINCAcQABixAxiABBiKBTIKCAgQLhixAxiABDINCAkQABixAxiABBiKBdIBCDE5NzJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
// https://www.google.com/search?q=hey&oq=hey&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIKCAEQABixAxiABDIKCAIQABixAxiABDIKCAMQLhixAxiABDIKCAQQLhixAxiABDINCAUQABixAxiABBiKBTIQCAYQABiDARixAxiABBiKBTINCAcQABixAxiABBiKBTIKCAgQLhixAxiABDINCAkQABixAxiABBiKBdIBCDE5NzJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
