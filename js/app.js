
const API_KEY = `8e4053e6b61ac3da82bed230c54e8e71`;
const searchTemperature = () => {
    const cityName = document.getElementById('city-name');
    const cityNameText = cityName.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameText}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
    cityName.value = '';
}

const setText = (id, text) => {
    document.getElementById(id).innerText = text;
}

// display temperature
const displayTemperature = temperatures => {
    console.log(temperatures);
    setText('city', temperatures.name);
    setText('temperature', temperatures.main.temp);
    setText('cloud-icon', temperatures.weather[0].main);
    // weather icon
    const url = `https://openweathermap.org/img/wn/${temperatures.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('top-icon');
    imgIcon.setAttribute('src', url)
}
