var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9d35619d5e5ec7d3bd478ec4a6243d80&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {


      if (res.data.cod && res.data.message) {
        throw new Error(res.response.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      debugger;
      throw new Error(res.response.data.message);
    });
  }
}
