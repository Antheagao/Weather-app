// Import libraries
import express from 'express';
import { getWeather } from '../services/weatherApi.js';

// Initialize constants
const router = express.Router();

// route call to get the weather
router.get('/', async (req, res) => {
  const city = req.query.city;
  
  try {
    const data = await getWeather(city);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
});

// Export module
export default router;
