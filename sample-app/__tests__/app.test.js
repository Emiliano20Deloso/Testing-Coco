const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should return Hello from sample app', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello from sample app');
    });
});

describe('GET /name/:name', () => {
    it('should return Hello with the given name', async () => {
        const res = await request(app).get('/name/Emiliano');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello Emiliano');
    });
});
