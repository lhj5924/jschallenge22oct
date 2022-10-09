const API_KEY = "f24ccd1ad865cd1692401d49ce32ef57";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const icon = data.weather[0].icon;
      const apiIcon = document.querySelector(".weather-icon");

      const city = document.querySelector("#cityName");
      const weather = document.querySelector("#weather span:last-child");

      apiIcon.innerHTML = `<img src="img/weathericons/${icon}.png"/>`;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      city.innerText = JSON.stringify(data.name);
  });
};

function onGeoError() {
  alert("Can't find your location. Weather info is not able to found.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

