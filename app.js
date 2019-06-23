const argv = require('./config/yargs').argv;
const place = require('./place/place');
const weather = require('./weather/weather');


const getInfo = async(address) => {



    try {
        const coords = await place.getPlaceLatLng(address);
        const temperature = await weather.getWeatherByPlace(coords.lat, coords.lng);
        return `El clima de ${coords.location} es de ${temperature}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${address}`;
    }


}

getInfo(argv.direcccion).then(console.log).catch(console.log);