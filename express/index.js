const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const clubRoutes = require('./routes/club');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://admin:admin@mongodb:27017/Clubs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/clubs', clubRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
