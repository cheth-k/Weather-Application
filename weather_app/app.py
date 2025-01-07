from flask import Flask, render_template, request, jsonify
import requests
from config import API_KEY

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_weather', methods=['POST'])
def get_weather():
    try:
        city = request.json['city']
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
        response = requests.get(url)
        data = response.json()

        if response.status_code == 200:
            weather_data = {
                'city': data['name'],
                'country': data['sys']['country'],
                'temperature': round(data['main']['temp']),
                'description': data['weather'][0]['description'],
                'icon': data['weather'][0]['icon'],
                'humidity': data['main']['humidity'],
                'wind_speed': round(data['wind']['speed'], 1),
                'pressure': data['main']['pressure']
            }
            return jsonify({'status': 'success', 'data': weather_data})
        else:
            return jsonify({'status': 'error', 'message': 'City not found'})

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

if __name__ == '__main__':
    app.run(debug=True)