const express = require('express');
const pool = require('./config/db');
require('dotenv').config();
const app = express();

app.use(express.json());

app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1');
    res.send('✅ MySQL connected!');
  } catch (err) {
    console.error('❌ DB Connection Error:', err);
    res.status(500).send('Database connection failed');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Yeah !!! Server running on port ${PORT}`);
});
