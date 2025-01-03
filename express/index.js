const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');
const bookRoutes = require('./routes/book');
const userRoutes = require('./routes/user');
const cors = require('cors');
const reservationRoutes = require('./routes/reservation'); // Add this line
const app = express();

// More specific CORS configuration (recommended for production):
const corsOptions = {
  origin: 'http://127.0.0.1:5500', // Only allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
  credentials: true, // Allow sending cookies
  optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// Middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/products', productRoutes);
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/reservations', reservationRoutes); // Add this line

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// superviser / refreshtoken