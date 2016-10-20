var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It is {temp} degree in {location} now~~</h3>
  )
}

module.exports = WeatherMessage;
