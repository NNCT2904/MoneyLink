const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const url = 'http://localhost:3001';

let userObject = {
  _id: '',
  username: '',
  email: '',
};

describe('User controller test', () => {
  it('Should be able to create a user', (done) => {
    chai
      .request(url)
      .post('/api/createUser')
      .send({ username: 'Test user', email: 'email@example.com' })
      .end((err, res) => {
        userObject = res.body;
        res.should.have.status(201);
        res.body.should.have.property('username').eql('Test user');
        res.body.should.have.property('email').eql('email@example.com');
        done();
      });
  });

  it('Should be able to get a user on _id', (done) => {
    chai
      .request(url)
      .get('/api/getUser')
      .send({ _id: userObject._id })
      .end((err, res) => {
        userObject = res.body;
        res.should.have.status(200);
        res.body.should.have.property('username').eql(userObject.username);
        res.body.should.have.property('email').eql(userObject.email);
        done();
      });
  });

  it('Should be able to update user detail', (done) => {
    chai
      .request(url)
      .put('/api/updateUser')
      .send({ _id: userObject._id, username: 'Updated user', email: 'updatedemail@example.com' })
      .end((err, res) => {
        userObject = res.body;
        res.should.have.status(200);
        res.body.should.have.property('username').eql('Updated user');
        res.body.should.have.property('email').eql('updatedemail@example.com');
        done();
      });
  });

  it('Should be able to delete user', (done) => {
    chai
      .request(url)
      .delete('/api/deleteUser')
      .send({ _id: userObject._id })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('username').eql(userObject.username);
        res.body.should.have.property('email').eql(userObject.email);
        done();
      });
  });

  it('Should not be able to get user after deletion', (done) => {
    chai
      .request(url)
      .get('/api/getUser')
      .send({ _id: userObject._id })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error').eql('User not found');
        done();
      });
  });
});
