const express = require('express');
const bodyParser = require('body-parser');
const { ExampleController } = require('../Controllers');

const appRouter = express.Router();

appRouter.use(bodyParser.json());

// Declare APIs here
appRouter.post('/createExample', ExampleController.createExample);
appRouter.get('/findExamples', ExampleController.findExamples);
appRouter.get('/getExample', ExampleController.getExample);
appRouter.get('/getAllExamples', ExampleController.getAllExamples);
appRouter.put('/updateExample', ExampleController.updateExample);
appRouter.delete('/deleteExample', ExampleController.deleteExample);

module.exports = appRouter;
