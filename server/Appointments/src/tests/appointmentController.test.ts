import chai from 'chai';
import chaiHTTP from 'chai-http';
const app = require('../index');

chai.use(chaiHTTP);
const { expect } = chai;

describe('Appointment controller', () => {
    describe('GET /api/appointment', () => {
        chai.request(app)
        .get('/api/appointment').end((res) => {
            expect(res).to.have.status(200);
        });
    });
});
