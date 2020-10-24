//  Imports
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const axios = require('axios');

//  Main
const app = express();

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

//  CORS
app.use(cors());

// External API axios instance
const metaWeatherApi = axios.create({
    baseURL: 'https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com'
});

//  Routes
//  GET /
app.get('/', (req, res) =>{
    res.status(200).send("Hello World");
});

//  GET /boston-weather
app.get('/boston-weather', async (req, res) => {
    //  Fetch the boston weather forecast for the next days
    const metaWeatherRes = await metaWeatherApi.get('/api/location/2367105');
    res.status(200).json(metaWeatherRes.data);
});

//  App running
module.exports = app; 
