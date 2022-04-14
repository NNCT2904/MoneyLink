const { Household, Bill, User } = require('../../Models');

const createHousehold = async (req, res) => {
  const { name } = req.body;

  const household = new Household({
    name: name,
  });

  return await household.save().then((household) => res.status(201).json({ household }));
};

const getHousehold = async (req, res) => {
  const { _id } = req.body;

  return await Household.findById(_id)
    .then((household) => res.status(200).json({ household }))
    .catch((error) => res.status(400).json({ error }));
};

const updateHousehold = async (req, res) => {
  const { _id } = req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  await Household.findByIdAndUpdate(_id, req.body);

  return await Household.findById(_id)
    .then((household) => res.status(200).json({ household }))
    .catch((error) => res.status(400).json({ error }));
};

const deleteHousehold = async (req, res) => {
  const { _id } = req.body;

  return await Household.findByIdAndDelete(_id)
    .then((household) => res.status(200).json({ household }))
    .catch((error) => res.status(400).json({ error }));
};

module.exports = {
  createHousehold,
  getHousehold,
  updateHousehold,
  deleteHousehold,
};
