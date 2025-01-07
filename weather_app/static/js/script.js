// Get DOM elements
const cityInput = document.getElementById('cityInput');
const weatherBox = document.getElementById('weatherBox');
const errorMessage = document.getElementById('errorMessage');

// Add event listener for Enter key
cityInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});

// Function to get weather data
async function getWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    try {
        const response = await fetch('/get_weather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ city: city })
        });

        const data = await response.json();

        if (data.status === 'success') {
            displayWeather(data.data);
            hideError();
        } else {
            showError(data.message);
        }
    } catch (error) {
        showError('Failed to fetch weather data');
    }
}

// Function to display weather data
function displayWeather(data) {
    weatherBox.style.display = 'block';
    
    // Update DOM elements with weather data
    document.getElementById('cityName').textContent = `${data.city}, ${data.country}`;
    document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('temperature').textContent = `${data.temperature}°C`;
    document.getElementById('description').textContent = data.description;
    document.getElementById('humidity').textContent = `${data.humidity}%`;
    document.getElementById('windSpeed').textContent = `${data.wind_speed} m/s`;
    document.getElementById('pressure').textContent = `${data.pressure} hPa`;
}

// Function to show error message
function showError(message) {
    errorMessage.style.display = 'block';
    errorMessage.textContent = message;
    weatherBox.style.display = 'none';
}

// Function to hide error message
function hideError() {
    errorMessage.style.display = 'none';
}