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
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: 'Missing parameter "email"' });

  return await Household.find({ email: email })
    .then((household) => {
      if (!household) return res.status(404).json({ error: 'Household not found' });
      return res.status(200).json(household);
    })
    .catch((error) => res.status(400).json(error));
};

const getHousehold = async (req, res) => {
  const { _id } = req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  return await Household.findById(_id)
    .then((household) => {
      if (!household) return res.status(404).json({ error: 'Household not found' });
      return res.status(200).json(household);
    })
    .catch((error) => res.status(400).json(error));
};

const updateHousehold = async (req, res) => {
  const { _id } = req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  await Household.findByIdAndUpdate(_id, req.body);

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

module.exports = {
  createHousehold,
  findHousehold,
  getHousehold,
  updateHousehold,
  deleteHousehold,
};
