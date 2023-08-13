const express = require('express');
const app = express();

const port = 1605; 

app.get('/', (req, res) => {   // return should be in JSON format.
  res.send ({
    success: true,
    message:"Hi Asmaa :D",
    data: {
      
    }
  });
});

app.listen(port);