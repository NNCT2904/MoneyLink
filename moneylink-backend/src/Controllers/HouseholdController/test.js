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
};

describe('Household controller test', () => {
  it('Should be able to create a household', (done) => {
    chai
      .request(url)
      .post('/api/createHousehold')
      .send({ name: 'Test household' })
      .end((err, res) => {
        householdObject = res.body;
        res.should.have.status(201);
        res.body.should.have.property('name').eql('Test household');
        done();
      });
  });

  it('Should be able to get a household on _id', (done) => {
    chai
      .request(url)
      .get('/api/getHousehold')
      .send({ _id: householdObject._id })
      .end((err, res) => {
        householdObject = res.body;
        res.should.have.status(200);
        res.body.should.have.property('name').eql(householdObject.name);
        done();
      });
  });

  it('Should be able to update household detail', (done) => {
    chai
      .request(url)
      .put('/api/updateHousehold')
      .send({ _id: householdObject._id, name: 'Updated household' })
      .end((err, res) => {
        householdObject = res.body;
        res.should.have.status(200);
        res.body.should.have.property('name').eql('Updated household');
        done();
      });
  });

  it('Should be able to delete household', (done) => {
    chai
      .request(url)
      .delete('/api/deleteHousehold')
      .send({ _id: householdObject._id })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('name').eql(householdObject.name);
        done();
      });
  });

  it('Should not be able to get household after deletion', (done) => {
    chai
      .request(url)
      .get('/api/getHousehold')
      .send({ _id: householdObject._id })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error').eql('Household not found');
        done();
      });
  });
});
