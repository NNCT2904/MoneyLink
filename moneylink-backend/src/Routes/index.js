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
appRouter.post('/createHousehold', HouseholdController.createHousehold);
appRouter.get('/getHousehold', HouseholdController.getHousehold);
appRouter.put('/updateHousehold', HouseholdController.updateHousehold);
appRouter.delete('/deleteHousehold', HouseholdController.deleteHousehold);

// Bill APIs
appRouter.post('/createBill', BillController.createBill);
appRouter.get('/getBill', BillController.getBill);
appRouter.put('/updateBill', BillController.updateBill);
appRouter.delete('/deleteBill', BillController.deleteBill);

// User APIs
appRouter.post('/createUser', UserController.createUser);
appRouter.get('/getUser', UserController.getUser);
appRouter.put('/updateUser', UserController.updateUser);
appRouter.delete('/deleteUser', UserController.deleteUser);

module.exports = appRouter;
