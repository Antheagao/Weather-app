// Import libraries
import axios from 'axios';
import dotenv from 'dotenv';

// Initialize constants
dotenv.config();
const API_KEY = process.env.WEATHER_API_KEY
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Export function to get weather api data
export const getWeather = async (city) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    });

    return response.data
  } catch (error) {
    console.error('Error fetching weather:', error.response?.data || error.message);
    throw new Error('Failed to fetch weather data');
  }
};
