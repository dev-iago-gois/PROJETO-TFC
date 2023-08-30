import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { allMatches, inProgressTrue, inProgressFalse } from './mocks/Match.mocks';
import Validations from '../../src/middlewares/Validations';
import JWT from '../../src/utils/JWT';

import SequelizeMatch from '../database/models/SequelizeMatches';

chai.use(chaiHttp);

const { expect } = chai;

describe('Matches Test', function() {
  it('should return all matches', async function() {
    // Arrange
    sinon.stub(SequelizeMatch, 'findAll').resolves(allMatches as any);

    // Act
    const { status, body } = await chai.request(app)
      .get('/matches');

    // Assert
    expect(status).to.equal(200);
    expect(body).to.deep.equal(allMatches);
  });

  it('should return only matches in progress', async function() {
    // Arrange
    sinon.stub(SequelizeMatch, 'findAll').resolves(inProgressTrue as any);

    // Act
    const { status, body } = await chai.request(app)
      .get('/matches?inProgress=true');

    // Assert
    expect(status).to.equal(200);
    expect(body).to.deep.equal(inProgressTrue);
  });

  it('should return status 200 and message "Finished"', async function() {
    // Arrange
    sinon.stub(SequelizeMatch, 'update').resolves();
    sinon.stub(JWT, 'verify').resolves({ email: 'admin@admin.com' });

    // Act
    const { status, body } = await chai.request(app)
      .patch('/matches/41/finish')
      .set('authorization', 'Bearer VALIDTOKEN');

    // Assert
    expect(status).to.equal(200);
    expect(body.message).to.equal('Finished');
  });

  it('should return status 200 and message "Updated"', async function() {
    // Arrange
    sinon.stub(SequelizeMatch, 'update').resolves();
    sinon.stub(JWT, 'verify').resolves({ email: 'admin@admin.com' });

    // Act
    const { status, body } = await chai.request(app)
      .patch('/matches/1')
      .set('authorization', 'Bearer VALIDTOKEN')
      .send({ homeTeamGoals: 1, awayTeamGoals: 1 });

    // Assert
    expect(status).to.equal(200);
    expect(body.message).to.equal('Updated');
  });

  afterEach(sinon.restore);
});
