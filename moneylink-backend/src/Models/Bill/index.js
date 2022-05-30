const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
});

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;