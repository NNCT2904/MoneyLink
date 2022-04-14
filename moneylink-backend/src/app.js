require('dotenv').config();
const express = require('express');
const cors = require('cors');
const appRouter = require('./Routes');
const mongoConnect = require('./mongoConnect');

const PORT = 3001;

const app = express();

app.use(cors());
app.use('/api', appRouter);

// Connect to MongoDB
mongoConnect(process.env.MONGODB_URI);

app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});

module.exports = app;
