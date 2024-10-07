const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key

// DOM elements
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

// Function to fetch weather data
function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

            // Update DOM elements with data
            cityName.textContent = `${data.name}, ${data.sys.country}`;
            temp.textContent = `Temperature: ${data.main.temp}°C`;
            description.textContent = `Weather: ${data.weather[0].description}`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
            windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

// Event listener for the search button
searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});
