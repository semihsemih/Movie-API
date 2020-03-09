const chai = require('chai');
const chaiHtpp = require('chai-http');
const should = chai.should();

// Server
const server = require('../app');

chai.use(chaiHtpp);

describe('Node Server', () => {
  it('(GET /) return homepage', done => {
    chai
      .request(server)
      .get('/')
      .end((err, result) => {
        result.should.have.status(200);
        done();
      });
  });
});
