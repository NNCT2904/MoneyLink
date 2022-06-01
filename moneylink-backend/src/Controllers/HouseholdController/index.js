const { Household, Bill, User } = require('../../Models');

const createHousehold = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) return res.status(400).json({ error: 'Missing parameter "name" or "email"' });

  const household = new Household({
    name,
    email,
  });

  return await household.save().then((household) => res.status(201).json(household));
};

const findHousehold = async (req, res) => {
  const { email } = req.query.email ? req.query : req.body;

  if (!email) return res.status(400).json({ error: 'Missing parameter "email"' });

  return await Household.find({ email: email })
    .then((household) => {
      if (!household) return res.status(404).json({ error: 'Household not found' });
      return res.status(200).json(household);
    })
    .catch((error) => res.status(400).json(error));
};

const getHousehold = async (req, res) => {
  const { _id } = req.query._id ? req.query : req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  return await Household.findById(_id)
    .populate({
      path: 'bills',
      populate: {
        path: 'user',
        select: { username: 1, _id: 0 },
      },
    })
    .populate('members')
    .then((household) => {
      if (!household) return res.status(404).json({ error: 'Household not found' });
      return res.status(200).json(household);
    })
    .catch((error) => res.status(400).json(error));
};

const updateHousehold = async (req, res) => {
  const { _id } = req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  await Household.findByIdAndUpdate(_id, req.body, { new: true });

  return await Household.findById(_id)
    .then((household) => res.status(200).json(household))
    .catch((error) => res.status(400).json(error));
};

const deleteHousehold = async (req, res) => {
  const { _id } = req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  return await Household.findByIdAndDelete(_id)
    .then((household) => res.status(200).json(household))
    .catch((error) => res.status(400).json(error));
};

const addMember = async (req, res) => {
  const { householdId, userId } = req.body;

  if (!householdId || !userId) return res.status(400).json({ error: 'Missing parameter (s)' });

  return await Household.findByIdAndUpdate(householdId, { $push: { members: userId } }, { new: true })
    .then((household) => res.status(200).json(household))
    .catch((error) => res.status(400).json(error));
};

const addBill = async (req, res) => {
  const { name, amount, householdId, userId } = req.body;

  if (!name || !amount || !householdId || !userId) return res.status(400).json({ error: 'Missing parameter (s)' });

  const bill = new Bill({
    user: userId,
    name,
    amount,
  });

  await bill.save();

  return await Household.findByIdAndUpdate(householdId, { $push: { bills: bill } }, { new: true })
    .populate({
      path: 'bills',
      populate: {
        path: 'user',
        select: { username: 1 },
      },
    })
    .then((household) => res.status(200).json(household))
    .catch((error) => res.status(400).json(error));
};

const resetHousehold = async (req, res) => {
  const { _id } = req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  return await Household.findByIdAndUpdate(_id, { $set: { bills: [], members: [] } }, { new: true })
    .then((household) => res.status(200).json(household))
    .catch((error) => res.status(400).json(error));
};

module.exports = {
  createHousehold,
  findHousehold,
  getHousehold,
  updateHousehold,
  deleteHousehold,
  addMember,
  addBill,
  resetHousehold,
};
