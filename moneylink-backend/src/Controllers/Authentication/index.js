const { Household } = require('../../Models');

// This is a mockup singup / login function, the password is not required and is not checked

const signup = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) return res.status(400).json({ error: 'Missing parameter "name" or "email"' });

  const household = new Household({
    name,
    email,
  });

  return await household.save().then((household) => res.status(201).json(household));
};

const login = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: 'Missing parameter "email"' });

  return await Household.find({ email: email })
    .populate({
      path: 'bills',
      populate: {
        path: 'user',
        select: { username: 1, _id: 1 },
      },
    })
    .populate({
      path: 'members',
      select: { username: 1, _id: 1 },
    })
    .then((household) => {
      if (household.length < 1) return res.status(404).json({ error: 'Household not found' });
      return res.status(200).json(household);
    })
    .catch((error) => res.status(400).json(error));
};

module.exports = {
  signup,
  login,
};
