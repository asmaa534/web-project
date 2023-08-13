const express = require('express');
const app = express();

const port = 1605; 

app.get('/', (req, res) => {
  res.send('Hi bashmohandes mahmoud');
});

app.listen(port);