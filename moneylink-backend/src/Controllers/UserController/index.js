const { User } = require('../../Models');

const createUser = async (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) return res.status(400).json({ error: 'Missing parameter "username" or "email"' });

  const user = new User({
    username: username,
    email: email,
  });

  return await user.save().then((user) => res.status(201).json(user));
};

const getUser = async (req, res) => {
 // const { _id } = req.body;

  //if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  return await User.findAll({attributes: ['id', 'name']})
    .then((user) => {
      if (!user) return res.status(404).json({ error: 'User not found' });
      return res.status(200).json(user);
    })
    .catch((error) => res.status(400).json(error));
};

const updateUser = async (req, res) => {
  const { _id } = req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  await User.findByIdAndUpdate(_id, req.body);

  return await User.findById(_id)
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json(error));
};

const deleteUser = async (req, res) => {
  const { _id } = req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  return await User.findByIdAndDelete(_id)
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(400).json(error));
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
}