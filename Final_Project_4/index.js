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
    var humidityImg = document.querySelector(".list-kelembapan img");  //Variable untuk megambil id img cuaca
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

    // Kondisi Keadaan Cuaca
    if (result.humidity >= 80 && result.temp < 15) {
      weatherType = "Kabut";
      humidityImg.src = "icon/low-humidity.png";
    } else if (result.humidity >= 80 && result.temp >= 15) {
      weatherType = "Mendung";
      humidityImg.src ="icon/storm.png";
    } else if (result.wind_speed > 2 && result.wind_degrees >= 90 && result.wind_degrees <= 270) {
      weatherType = "Berawan";
      humidityImg.src ="icon/sun-cloud.png";
    } else if (result.wind_speed > 2 && result.wind_degrees >= 0 && result.wind_degrees < 90) {
      weatherType = "Cerah";
      humidityImg.src ="icon/sun.png";
    } else if (result.wind_speed > 2 && result.wind_degrees > 270 && result.wind_degrees <= 360) {
      weatherType = "Petir dan Hujan";
      humidityImg.src ="icon/storm.png";
    } else if (result.wind_speed <= 2 && result.temp >= 25 && result.temp <= 35) {
      weatherType = "Hujan Ringan";
      humidityImg.src ="icon/rain.png";
    } else if (result.wind_speed <= 2 && (result.temp > 35 || result.temp < 25)) {
      weatherType = "Cerah";
      humidityImg.src ="icon/sun.png";
    } else {
      weatherType = "Tidak Diketahui";
      humidityImg.src ="icon/sun.png";
    }
    
    console.log(weatherType)
    tipeCuaca.innerHTML=weatherType;
    

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
