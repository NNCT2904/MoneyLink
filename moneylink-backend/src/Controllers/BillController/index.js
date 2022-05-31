const { Bill } = require('../../Models');

const createBill = async (req, res) => {
  const { name, user, amount } = req.body;

  if (!name || !user || !amount) return res.status(400).json({ error: 'Missing parameter "name" or "user" or "amount"' });

  const bill = new Bill({
    name: name,
    user: user,
    amount: amount,
  });

  return await bill.save().then((bill) => res.status(201).json(bill));
};

const getBill = async (req, res) => {
  const { _id } = req.query._id ? req.query : req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  return await Bill.findById(_id)
    .then((bill) => {
      if (!bill) return res.status(404).json({ error: 'Bill not found' });
      return res.status(200).json(bill);
    })
    .catch((error) => res.status(400).json(error));
};

const updateBill = async (req, res) => {
  const { _id, name, user, amount } = req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  // if (!name || !user || !amount) return res.status(400).json({ error: 'Missing parameter "name" or "user" or "amount"' });

  await Bill.findByIdAndUpdate(_id, req.body);

  return await Bill.findById(_id)
    .then((bill) => res.status(200).json(bill))
    .catch((error) => res.status(400).json(error));
};

const deleteBill = async (req, res) => {
  const { _id } = req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  return await Bill.findByIdAndDelete(_id)
    .then((bill) => res.status(200).json(bill))
    .catch((error) => res.status(400).json(error));
};

module.exports = {
  createBill,
  getBill,
  updateBill,
  deleteBill,
};
