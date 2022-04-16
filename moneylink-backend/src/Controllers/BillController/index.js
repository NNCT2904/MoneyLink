const { Bill } = require('../../Models');

const createBill = async (req, res) => {
  const { name, amount } = req.body;

  if (!name || !amount) return res.status(400).json({ error: 'Missing parameter "name" or "amount"' });

  const bill = new Bill({
    name: name,
    amount: amount,
  });

  return await bill.save().then((bill) => res.status(201).json(bill));
};

const getBill = async (req, res) => {
  const { _id } = req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

  return await Bill.findById(_id)
    .then((bill) => {
      if (!bill) return res.status(404).json({ error: 'Bill not found' });
      return res.status(200).json(bill);
    })
    .catch((error) => res.status(400).json(error));
};

const updateBill = async (req, res) => {
  const { _id } = req.body;

  if (!_id) return res.status(400).json({ error: 'Missing parameter "id"' });

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
