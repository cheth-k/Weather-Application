# Weather Application

A modern, user-friendly weather application built with Python Flask, HTML, CSS, and JavaScript. Get real-time weather information for any city worldwide.

## Features

- 🌡️ Real-time weather data display
- 🔍 Search by city name
- 🌍 Global weather coverage
- 📱 Responsive design for all devices
- 🎨 Clean and modern user interface
- 📊 Detailed weather metrics:
  - Temperature
  - Humidity
  - Wind Speed
  - Atmospheric Pressure
  - Weather Description

## Technologies Used

- Backend:
  - Python 3.x
  - Flask
  - Requests
- Frontend:
  - HTML5
  - CSS3
  - JavaScript
- API:
  - OpenWeatherMap API

## Project Structure

```
weather_app/
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
├── templates/
│   └── index.html
├── app.py
├── config.py
└── requirements.txt
```

## Prerequisites

- Python 3.x installed
- OpenWeatherMap API key
- Web browser
- Internet connection

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install required packages:
```bash
pip install -r requirements.txt
```

3. Get your API key:
- Sign up at [OpenWeatherMap](https://openweathermap.org/)
- Go to your API keys section
- Copy your API key

4. Configure the application:
- Open `config.py`
- Replace `YOUR_API_KEY_HERE` with your actual API key:
```python
API_KEY = "your-actual-api-key-here"
```

## Running the Application

1. Start the Flask server:
```bash
python app.py
```

2. Open your web browser and navigate to:
```
http://localhost:5000
```

## Usage

1. Enter a city name in the search box
2. Press Enter or click the search button
3. View detailed weather information:
   - Current temperature
   - Weather conditions
   - Humidity levels
   - Wind speed
   - Atmospheric pressure

## API Rate Limits

- Free tier includes:
  - 60 calls per minute
  - Current weather data
  - Basic weather metrics
  - No credit card required

## Contributing

1. Fork the repository
2. Create your feature branch:
```bash
git checkout -b feature/YourFeature
```
3. Commit your changes:
```bash
git commit -m 'Add some feature'
```
4. Push to the branch:
```bash
git push origin feature/YourFeature
```
5. Submit a pull request

## Error Handling

The application includes error handling for:
- Invalid city names
- API connection issues
- Rate limit exceeded
- Network connectivity problems

## Security Notes

- Never commit your API key to public repositories
- Consider using environment variables for API key in production
- Keep your API key private and secure

## Future Improvements

- [ ] Add 5-day weather forecast
- [ ] Implement temperature unit conversion
- [ ] Add weather maps
- [ ] Include more weather metrics
- [ ] Add user location detection
- [ ] Implement weather alerts

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- OpenWeatherMap for providing the weather data API
- Font Awesome for the icons
- Flask community for the excellent documentation

## Contact

If you have any questions or suggestions, please open an issue or contact [your-email@example.com]
