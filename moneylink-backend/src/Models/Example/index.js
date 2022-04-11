const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Example = mongoose.model('Example', ExampleSchema);

module.exports = Example;