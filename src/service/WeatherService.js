import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const LAT = -27.4705
const LONG = 153.0260;

const getWeather = async () => {
    try {
        const response = await axios.get(`${BASE_URL}?lat=${LAT}&lon=${LONG}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

export default getWeather;