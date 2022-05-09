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

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/test", (req, res) => {
  const name = req.body.name // 'O.O'
  console.log(req.body.name)
  res.json( name )
});

// Connect to MongoDB
mongoConnect(process.env.MONGODB_URI);

app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});

module.exports = app;
