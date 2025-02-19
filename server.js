const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect Database
connectDB();

// Mount Routes
app.use('/api', require('./routes/auth'));        // For /api/register and /api/login
app.use('/api/posts', require('./routes/posts'));   // For all /api/posts endpoints

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
