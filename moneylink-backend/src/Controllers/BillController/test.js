const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const url = 'http://localhost:3001';

let billObject = {
  _id: '',
  name: '',
  user: {},
  amount: 0,
};

let userObject = {
  _id: '',
  username: '',
  email: '',
};

describe('Bill controller test', () => {
  it('Prepare a dummy user', (done) => {
    chai
      .request(url)
      .post('/api/user')
      .send({
        username: 'testuser',
        email: 'test@user.com',
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.username).to.equal('testuser');
        expect(res.body.email).to.equal('test@user.com');
        userObject = res.body;
        done();
      });
  });
  it('Should be able to create a bill', (done) => {
    chai
      .request(url)
      .post('/api/bill')
      .send({
        name: 'Test bill',
        amount: 100,
        user: userObject,
      })
      .end((err, res) => {
        billObject = res.body;
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('name').eql('Test bill');
        expect(res.body).to.have.property('amount').eql(100);
        done();
      });
  });

  it('Should be able to get a bill on _id', (done) => {
    chai
      .request(url)
      .get('/api/bill')
      .send({ _id: billObject._id })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('name').eql(billObject.name);
        expect(res.body).to.have.property('amount').eql(billObject.amount);
        done();
      });
  });

  it('Should be able to update a bill', (done) => {
    chai
      .request(url)
      .put('/api/bill')
      .send({
        _id: billObject._id,
        name: 'Test bill updated',
        amount: 200,
      })
      .end((err, res) => {
        billObject = res.body;
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('name').eql('Test bill updated');
        expect(res.body).to.have.property('amount').eql(200);
        done();
      });
  });

  it('Should be able to delete a bill', (done) => {
    chai
      .request(url)
      .delete('/api/bill')
      .send({ _id: billObject._id })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('name').eql(billObject.name);
        expect(res.body).to.have.property('amount').eql(billObject.amount);
        done();
      });
  });

  it('Should not be able to get a bill after deletion', (done) => {
    chai
      .request(url)
      .get('/api/bill')
      .send({ _id: billObject._id })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('error').eql('Bill not found');
        done();
      });
  });

  it('Cleanup test data', (done) => {
    chai
      .request(url)
      .delete('/api/user')
      .send({ _id: userObject._id })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
