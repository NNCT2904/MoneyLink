const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const { Household } = require('../../Models');
const mongoConnect = require('../../mongoConnect');

chai.use(chaiHttp);

const url = 'http://localhost:3001';

let householdObject = {
  _id: '',
  name: '',
  email: '',
};

let userObject = {
  username: '',
  email: '',
  _id: '',
};

let billObject = {
  name: '',
  amount: 0,
  _id: '',
  user: userObject,
};

describe('Household controller test', () => {
  it('Should be able to create a household', (done) => {
    chai
      .request(url)
      .post('/api/household')
      .send({
        name: 'Test household',
        email: 'test@example.com',
      })
      .end((err, res) => {
        householdObject = res.body;
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('name').eql('Test household');
        done();
      });
  });

  it('Should be able to find the household given an email', (done) => {
    chai
      .request(url)
      .get(`/api/findHousehold`)
      .send({ email: householdObject.email })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('Should be able to get a household on _id', (done) => {
    chai
      .request(url)
      .get('/api/household')
      .send({ _id: householdObject._id })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('name').eql(householdObject.name);
        done();
      });
  });

  it('Should be able to update household detail', (done) => {
    chai
      .request(url)
      .put('/api/household')
      .send({ _id: householdObject._id, name: 'Updated household' })
      .end((err, res) => {
        householdObject = res.body;
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('name').eql('Updated household');
        done();
      });
  });

  it('Should be able to add a memeber to household', (done) => {
    chai
      .request(url)
      .post('/api/user')
      .send({
        username: 'testuserforhouseholdmocha',
        email: 'testuserforhouseholdmocha',
      })
      .end((err, res) => {
        userObject = res.body;
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('username').eql('testuserforhouseholdmocha');
        chai
          .request(url)
          .post('/api/household/addMember')
          .send({
            householdId: householdObject._id,
            userId: userObject._id,
          })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('members');
            done();
          });
      });
  });

  it('Should be able to add a bill to household', (done) => {
    chai
      .request(url)
      .post('/api/bill')
      .send({
        name: 'test bill for mocha',
        amount: 100,
        user: userObject._id,
      })
      .end((err, res) => {
        billObject = res.body;
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('name').eql('test bill for mocha');
        chai
          .request(url)
          .post('/api/household/addBill')
          .send({
            householdId: householdObject._id,
            userId: userObject._id,
            name: billObject.name,
            amount: billObject.amount,
          })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('bills');
            done();
          });
      });
  });

  it('Should be able to delete household', (done) => {
    chai
      .request(url)
      .delete('/api/household')
      .send({ _id: householdObject._id })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('name').eql(householdObject.name);
        done();
      });
  });

  it('Should not be able to get household after deletion', (done) => {
    chai
      .request(url)
      .get('/api/household')
      .send({ _id: householdObject._id })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('error').eql('Household not found');
        done();
      });
  });
});
