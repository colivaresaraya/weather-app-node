const axios = require('axios');

const getPlaceLatLng = async(address) => {

    const encodeURL = encodeURI(address);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'X-RapidAPI-Key': '8077a34046msh0557187289c3b24p1e75a7jsn9fe2c0f81109' }
    });



    const response = await instance.get()

    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para la direccion ${address}`)
    }

    const data = response.data.Results[0];
    const location = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        location,
        lat,
        lng
    }


}


module.exports = {
    getPlaceLatLng
}