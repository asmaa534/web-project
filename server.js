/*const express = require('express');
const app = express();

const port = 3000; 

app.get('/', (req, res) => { //return should be in json 
  return({
  sucess:true ,
  message:"Hi bashmohandes mahmoud",
  data: {

   }
  })
});
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; 
const http = require('http');
const axios = require('axios');
// Dummy API 1 - Current Time
app.get('/api/time', async (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });
});


app.get('/api/msg', (req, res) => {
  res.json({ message: 'Hello eng Mahmoud' });
});


app.use(express.json());
app.post('/weather', async (req, res) => {
  try {
    const { country } = req.body;
    const apiKey = '36ed7837af5a5893e4b58793f58dfcc3';
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${apiKey}`;

    const response = await axios.get(weatherUrl);
    const weatherData = response.data;

    res.json(weatherData);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

