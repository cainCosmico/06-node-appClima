const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=345e539577453a118f74ff0e9dfdef9e`)

    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
