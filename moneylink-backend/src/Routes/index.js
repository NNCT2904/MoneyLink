const express = require('express');
const bodyParser = require('body-parser');
const { ExampleController, HouseholdController, BillController, UserController } = require('../Controllers');

const appRouter = express.Router();

appRouter.use(bodyParser.json());

// Declare APIs here
appRouter.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});
// Example APIs
appRouter.post('/createExample', ExampleController.createExample);
appRouter.get('/findExamples', ExampleController.findExamples);
appRouter.get('/getExample', ExampleController.getExample);
appRouter.get('/getAllExamples', ExampleController.getAllExamples);
appRouter.put('/updateExample', ExampleController.updateExample);
appRouter.delete('/deleteExample', ExampleController.deleteExample);

// Household APIs
appRouter.post('/household', HouseholdController.createHousehold);
appRouter.get('/household', HouseholdController.getHousehold);
appRouter.put('/household', HouseholdController.updateHousehold);
appRouter.delete('/household', HouseholdController.deleteHousehold);

// Bill APIs
appRouter.post('/bill', BillController.createBill);
appRouter.get('/bill', BillController.getBill);
appRouter.put('/bill', BillController.updateBill);
appRouter.delete('/bill', BillController.deleteBill);

// User APIs
appRouter.post('/user', UserController.createUser);
appRouter.get('/user', UserController.getUser);
appRouter.put('/user', UserController.updateUser);
appRouter.delete('/user', UserController.deleteUser);

module.exports = appRouter;
