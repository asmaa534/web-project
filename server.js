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
const axios = require('axios');
const app = express();
const port = 3999; 
const http = require('http');

// Dummy API 1 - Current Time
app.get('/api/time', async (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });
});


app.get('/api/msg', (req, res) => {
  res.json({ message: 'Hello eng Mahmoud' });
});



server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



/*const server = http.createServer((req, res) => {
    let data = '';

    // Collect data from the request body
    req.on('data', chunk => {
        data += chunk.toString();
    });

    // Process collected data when the request ends
    req.on('end', () => {
        try {
            const userInput = JSON.parse(data);

            // You can access the user input as an object
            console.log('User input:', userInput);

            // Send a response
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Input received successfully.' }));
        } catch (error) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid JSON data.' }));
        }
    });
});


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Dummy API 3 - Weather by Country
//app.post('/api/weather', async (req, res) => {
  //const { country } = req.body;
  //if (!country) {
    //res.status(400).json({ error: 'Country parameter is missing.' });
    //return;
  //}
//});


// Function to get weather data for a country
/*async function getWeatherForCountry(countryName) {
 

  const apiKey = 'YOUR_API_KEY';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

// Collect user input (for example, using readline)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a country name: ', async (countryName) => {
  const weatherData = await getWeatherForCountry(countryName);
  if (weatherData) {
    console.log('Weather in', weatherData.name, ', ', weatherData.sys.country, ':', weatherData.weather[0].description);
    console.log('Temperature:', weatherData.main.temp, '°C');
  }

  rl.close();
});




//const apiKey = 'YOUR_API_KEY';
//const location = 'New York'; // Example location
// https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${New York}

//axios.get(`https://api.weatherapi.com/v1/current.json?key=${7a6c26ef477f48c6bc2181151232108}&q=${location}`).then(response => {

  //  const weatherData = response.data;
    // Process and use the weather data as needed
    //console.log(weatherData);
  //})
  //.catch(error => {
    //console.error('Failed to fetch weather data:', error);
  //});

  */



  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});