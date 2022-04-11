const { Example, ExampleSchema } = require('../../../Models');

const createExample = async (req, res) => {
  const { name } = req.body;
  const example = new Example({
    name: req.body.name,
    description: req.body.description,
  });
  return await example
    .save()
    .then((example) => res.status(201).json({ example }))
    .catch((error) => res.status(400).json({ error }));
};

const findExamples = async (req, res) => {
  const { name } = req.query;

  return await Example.find({ name: { $regex: name, $options: 'i' } })
    .then((examples) => res.status(200).json({ examples }))
    .catch((error) => res.status(400).json({ error }));
};

const getExample = async (req, res) => {
  const { id } = req.body;

  return await Example.findById(id)
    .then((example) => res.status(200).json({ example }))
    .catch((error) => res.status(400).json({ error }));
};

const getAllExamples = async (req, res) => {
  return await Example.find()
    .then((examples) => res.status(200).json({ examples }))
    .catch((error) => res.status(400).json({ error }));
};

const updateExample = async (req, res) => {
  const { id, name } = req.body;

  return await Example.findByIdAndUpdate(id, { name })
    .then((example) => res.status(200).json({ example }))
    .catch((error) => res.status(400).json({ error }));
};

const deleteExample = async (req, res) => {
  const { id } = req.body;

  return await Example.findByIdAndDelete(id)
    .then((example) => res.status(200).json({ example }))
    .catch((error) => res.status(400).json({ error }));
};

module.exports = {
  createExample,
  findExamples,
  getExample,
  getAllExamples,
  updateExample,
  deleteExample,
};
