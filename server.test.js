const request = require('supertest');
const app = require('./server');

describe('Todo API', () => {
    it('GET /todos returns todos', async () => {
        const res = await request(app).get('/todos');
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('POST /todos adds a todo', async () => {
        const res = await request(app)
            .post('/todos')
            .send({ text: 'Test todo' });
        expect(res.status).toBe(201);
        expect(res.body.text).toBe('Test todo');
    });
});
