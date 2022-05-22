const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
});

const Bill = mongoose.model('Bill', BillSchema);

module.exports = Bill;
