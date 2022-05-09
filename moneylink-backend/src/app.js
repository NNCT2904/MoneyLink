require('dotenv').config();
const express = require('express');
const cors = require('cors');
const appRouter = require('./Routes');
const mongoConnect = require('./mongoConnect');


const PORT = 3001;

const app = express();
app.use(cors());
app.use('/api', appRouter);

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

// Connect to MongoDB
mongoConnect(process.env.MONGODB_URI);

app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});

module.exports = app;
