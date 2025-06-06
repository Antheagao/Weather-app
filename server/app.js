// Import Libraries
import express from 'express';
import weatherRouter from './routes/weather.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/weather', weatherRouter);

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
