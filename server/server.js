require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic test route
// app.get('/api/test', (req, res) => {
//   res.json({ message: "Testing server." });
// });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});