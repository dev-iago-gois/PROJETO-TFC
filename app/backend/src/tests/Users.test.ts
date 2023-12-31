import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { invalidPasswordLoginBody, user, validLoginBody, wrongPassUser } from './mocks/Login.mocks';
import Validations from '../../src/middlewares/Validations';
import JWT from '../../src/utils/JWT';

import SequelizeUser from '../database/models/SequelizeUsers';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login Test', function() {
  it('should return a token when login is done', async function() {
    sinon.stub(SequelizeUser, 'findOne').resolves(user as any);
    sinon.stub(JWT, 'sign').returns('validToken');
    sinon.stub(Validations, 'validateLogin').returns();

    const { status, body } = await chai.request(app)
      .post('/login')
      .send(validLoginBody);

    expect(status).to.equal(200);
    expect(body).to.have.key('token');
  });

  it('should return status 401 and an error message when an incorrect password is provided', async function() {
    sinon.stub(SequelizeUser, 'findOne').resolves(wrongPassUser as any);
    sinon.stub(JWT, 'sign').returns('validToken');
    sinon.stub(Validations, 'validateLogin').returns();

    const { status, body } = await chai.request(app)
      .post('/login')
      .send(validLoginBody);

    expect(status).to.equal(401);
    expect(body.message).to.equal('Invalid email or password');
  });

  it('should return status 401 and an error message when an incorrect email is provided', async function() {
    sinon.stub(SequelizeUser, 'findOne').resolves(null);

    const { status, body } = await chai.request(app)
      .post('/login')
      .send(validLoginBody);

    expect(status).to.equal(401);
    expect(body.message).to.equal('Invalid email or password');
  });

  it('should return status 400 when a empty email or password is provided', async function() {
    const { status, body } = await chai.request(app)
      .post('/login')
      .send({});

    expect(status).to.equal(400);
    expect(body.message).to.equal('All fields must be filled');
  });

  it('should return status 401 when a invalid email or password is provided', async function() {
    const { status, body } = await chai.request(app)
      .post('/login')
      .send(invalidPasswordLoginBody);

    expect(status).to.equal(401);
    expect(body.message).to.equal('Invalid email or password');
  });

  it('should return status 200 and a role when a valid token is provided', async function() {
    sinon.stub(JWT, 'verify').resolves({ email: 'admin@admin.com' });
    sinon.stub(SequelizeUser, 'findOne').resolves(user as any);

    const { role } = user;

    const { status, body } = await chai.request(app).get('/login/role')
      .set('authorization', 'Bearer VALIDTOKEN');

    expect(status).to.equal(200);
    expect(body).to.deep.equal({ role });
  });

  it('should return status 401 and error message when no token is provided', async function() {
    const { status, body } = await chai.request(app).get('/login/role');

    expect(status).to.equal(401);
    expect(body.message).to.equal('Token not found');
  });

  it('should return status 401 and error message when a invalid token is provided', async function() {
    sinon.stub(JWT, 'verify').resolves('Token must be a valid token');
    const { status, body } = await chai.request(app).get('/login/role')
      .set('authorization', 'Bearer VALIDTOKEN');

    expect(status).to.equal(401);
    expect(body.message).to.equal('Token must be a valid token');
  });

  afterEach(sinon.restore);
});
