// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Add middleware and routes here
// Middleware
app.use(express.static('public'));

// Authentication Routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Home Page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
