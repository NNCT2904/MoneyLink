const mongoose = require('mongoose');

const HouseholdSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  bills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bill' }],
});

const Household = mongoose.model('Household', HouseholdSchema);

module.exports = Household;
