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

describe('Authentication mockup test', () => {
  it('Should return a new household when user signup', (done) => {
    chai
      .request(url)
      .post('/api/signup')
      .send({
        name: 'Test household',
        email: 'test@example.com',
      })
      .end((err, res) => {
        householdObject = res.body;
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('name').eql('Test household');
        expect(res.body).to.have.property('email').eql('test@example.com');
        done();
      });
  });
  it('Should return an array of correct households when user login', (done) => {
    chai
      .request(url)
      .post(`/api/login`)
      .send({ email: householdObject.email })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.have.property('name').eql('Test household');
        expect(res.body[0]).to.have.property('email').eql('test@example.com');
        done();
      });
  });

  it('Cleanup the this test by deleteing the test household', (done) => {
    chai
      .request(url)
      .delete('/api/household')
      .send({ _id: householdObject._id })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('name').eql(householdObject.name);
      });

    chai
      .request(url)
      .post('/api/login')
      .send({ email: householdObject.email })
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
