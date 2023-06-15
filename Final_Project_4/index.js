var city = 'Jakarta' ;
var apiKey = 'PkYGOd4D7TO5kJSVz8JiOg==4C1H3mqEqlvplnbW';

function updateData(){
  var cityData = document.getElementById('cityData').value;
  if (cityData != ""){
    city = cityData;
  }
  var worldTimeApiUrl = 'https://api.api-ninjas.com/v1/worldtime?city=' + city;
  var url = 'https://api.api-ninjas.com/v1/weather?city=' + city;

fetch(url, {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(result => {
    console.log(result);

    const cityName = document.getElementById('cityName');
    cityName.innerHTML = city ;
    
    const cityName2 = document.getElementById('cityName2');
    cityName2.innerHTML = city ;

    const humidity = document.getElementById('humidityData');
    humidity.innerHTML = JSON.stringify(result.humidity);

    const temperature = document.getElementById('tempData');
    temperature.innerHTML = JSON.stringify(result.temp);

    const mintemp = document.getElementById('mintempData');
    mintemp.innerHTML = JSON.stringify(result.min_temp);

    const maxtemp = document.getElementById('maxtempData');
    maxtemp.innerHTML = JSON.stringify(result.max_temp);

    const windSpeed = document.getElementById('windSpeedData');
    windSpeed.innerHTML = JSON.stringify(result.wind_speed);

    const windDegrees = document.getElementById('windDegreesData');
    windDegrees.innerHTML = JSON.stringify(result.wind_degrees);
  })
  .catch(error => {
    console.error('Error: ', error);
  });

  fetch(worldTimeApiUrl, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(timeResult => {
    console.log(timeResult);

   
    const currentTime = new Date(timeResult.datetime);
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

  
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    const timeString = hours + ":" + minutes + ":" + seconds;

   
    const timeElement = document.getElementById("time");
    timeElement.innerHTML = timeString;
    setTimeout(updateData, 10000);
   
  })
  .catch(error => {
    console.error('Error: ', error);
  });
  
}

  window.onload = updateData;
  