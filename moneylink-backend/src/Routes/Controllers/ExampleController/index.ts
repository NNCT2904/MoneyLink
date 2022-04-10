import { NextFunction, Request, Response } from 'express';
import { Example, ExampleSchema } from '../../../Models';

const createExample = async (req: Request, res: Response) => {
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

const findExamples = async (req: Request, res: Response) => {
  const { name } = req.query;

  return await Example.find({ name: { $regex: name, $options: 'i' } })
    .then((examples) => res.status(200).json({ examples }))
    .catch((error) => res.status(400).json({ error }));
};

const getExample = async (req: Request, res: Response) => {
  const { id } = req.body;

  return await Example.findById(id)
    .then((example) => res.status(200).json({ example }))
    .catch((error) => res.status(400).json({ error }));
};

const getAllExamples = async (req: Request, res: Response) => {
  return await Example.find()
    .then((examples) => res.status(200).json({ examples }))
    .catch((error) => res.status(400).json({ error }));
};

const updateExample = async (req: Request, res: Response) => {
  const { id, name } = req.body;

  return await Example.findByIdAndUpdate(id, { name })
    .then((example) => res.status(200).json({ example }))
    .catch((error) => res.status(400).json({ error }));
};

const deleteExample = async (req: Request, res: Response) => {
  const { id } = req.body;

  return await Example.findByIdAndDelete(id)
    .then((example) => res.status(200).json({ example }))
    .catch((error) => res.status(400).json({ error }));
};

export default {
  createExample,
  findExamples,
  getExample,
  getAllExamples,
  updateExample,
  deleteExample,
};
