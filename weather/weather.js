const axios = require('axios');

const getWeatherByPlace = async(lat, lng) => {

    const kelvinTo0C = 273.15;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d623c1a05e8e8424ba80f5e3de51c637`);


    return (response.data.main.temp - kelvinTo0C).toFixed(2);
}

module.exports = {
    getWeatherByPlace
}