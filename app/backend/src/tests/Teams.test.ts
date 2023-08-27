import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { teams, team } from './mocks/Team.mocks';
import SequelizeTeam from '../database/models/SequelizeTeams';
// import Validations from '../../src/middlewares/Validations';
// import JWT from '../../src/utils/JWT';

chai.use(chaiHttp);

const { expect } = chai;

describe('Books Test', function() {
  it('should return all teams', async function() {
    // const mock = SequelizeTeam.build(teams[0]);
    sinon.stub(SequelizeTeam, 'findAll').resolves(teams as any);

    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(teams);
  });

  it('should return a team by id', async function() {
    sinon.stub(SequelizeTeam, 'findByPk').resolves(team as any);

    const { status, body } = await chai.request(app).get('/teams/1');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(team);
  });
// TODO 2 TESTES, 1 - NA SE A RESPOSTA DE GETBYID NAO FOR SUCESSO
// 2 - SE NAO ACHAR UM TIME E RETORNAR NULL
  // it('should return not found if the book doesn\'t exists', async function() {
  //   sinon.stub(SequelizeBook, 'findOne').resolves(null);

  //   const { status, body } = await chai.request(app).get('/books/1');

  //   expect(status).to.equal(404);
  //   expect(body.message).to.equal('Book 1 not found');
  // });

  // it('should create a book', async function() {
  //   sinon.stub(SequelizeBook, 'create').resolves(book as any);
  //   sinon.stub(Validations, 'validateBook').returns();
  //   sinon.stub(JWT, 'verify').resolves();

  //   const { id, ...sendData } = book;

  // const { status, body } = await chai.request(app).post('/books')
  //     .set('authorization', 'validToken')
  //     .send(sendData);

  //   expect(status).to.equal(201);
  //   expect(body).to.deep.equal(book);
  // });

  // it('shouldn\'t create a book without a token', async function() {
  //   const { status, body } = await chai.request(app).post('/books');

  //   expect(status).to.equal(404);
  //   expect(body.message).to.equal('Token not found');
  // });

  // it('shouldn\'t create a book with an invalid token', async function() {
  //   const { status, body } = await chai.request(app).post('/books')
  //     .set('authorization', 'invalidToken');

  //   expect(status).to.equal(401);
  //   expect(body.message).to.equal('Token must be a valid token');
  // });

  // it('shouldn\'t create a book with invalid body data', async function() {
  //   sinon.stub(JWT, 'verify').resolves();

  //   const { status, body } = await chai.request(app).post('/books')
  //     .set('authorization', 'validToken')
  //     .send({});

  //   expect(status).to.equal(400);
  //   expect(body.message).to.equal('title is required');
  // });

  // it('should update a book', async function() {
  //   sinon.stub(SequelizeBook, 'update').resolves([1] as any);
  //   sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);
  //   sinon.stub(Validations, 'validateBook').returns();
  //   sinon.stub(JWT, 'verify').resolves();

  //   const { id, ...sendData } = book;

  //   const { status, body } = await chai.request(app).put('/books/1')
  //     .set('authorization', 'validToken')
  //     .send(sendData);

  //   expect(status).to.equal(200);
  //   expect(body.message).to.equal('Book updated');
  // });

  // it('should return not found when the book to update does not exists', async function() {
  //   sinon.stub(SequelizeBook, 'findByPk').resolves(null);
  //   sinon.stub(JWT, 'verify').resolves();

  //   const { id, ...sendData } = book;

  //   const { status, body } = await chai.request(app).put('/books/1')
  //     .set('authorization', 'validToken')
  //     .send(sendData);

  //   expect(status).to.equal(404);
  //   expect(body.message).to.equal('Book 1 not found');
  // });

  // it('should return conflict when there is nothing to be updated', async function() {
  //   sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);
  //   sinon.stub(SequelizeBook, 'update').resolves([0] as any);
  //   sinon.stub(JWT, 'verify').resolves();

  //   const { id, ...sendData } = book;

  //   const { status, body } = await chai.request(app).put('/books/1')
  //     .set('authorization', 'validToken')
  //     .send(sendData);

  //   expect(status).to.equal(409);
  //   expect(body.message).to.equal('There are no updates to perform in Book 1');
  // });

  // it('should delete a book', async function() {
  //   sinon.stub(SequelizeBook, 'destroy').resolves();
  //   sinon.stub(SequelizeBook, 'findByPk').resolves(book as any);
  //   sinon.stub(JWT, 'verify').resolves();

  //   const { status, body } = await chai.request(app).delete('/books/1')
  //     .set('authorization', 'validToken');

  //   expect(status).to.equal(200);
  //   expect(body.message).to.equal('Book deleted');
  // });

  // it('should return not found when the book to delete does not exists', async function() {
  //   sinon.stub(SequelizeBook, 'findByPk').resolves(null);
  //   sinon.stub(JWT, 'verify').resolves();

  //   const { status, body } = await chai.request(app).delete('/books/1')
  //     .set('authorization', 'validToken');

  //   expect(status).to.equal(404);
  //   expect(body.message).to.equal('Book 1 not found');
  // });

  afterEach(() => {
    sinon.restore();
  });
});
