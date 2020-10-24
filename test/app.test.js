const request = require('supertest');
const app = require('../src/app');

describe('Test the root path', () => {
    it("It should response with status 200 the GET method", async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toEqual(200);
    });

    it("It should GET Hello world text response", async () => {
        const response = await request(app).get('/');
        expect(response.text).toEqual("Hello World");
    });
});

describe('Test the uknown path response', () => {
    it("It should get a 404 status code if request an unknow path", async () => {
        const response = await request(app).get('/uknown');
        expect(response.statusCode).toEqual(404);
    });
});

describe('Test the /boston-weather path', () => {
    it("It should response with status 200 the GET method", async () => {
        const response = await request(app).get('/boston-weather');
        expect(response.statusCode).toEqual(200);
    });

    it("It should GET json body response", async () => {
        const response = await request(app).get('/boston-weather');
        expect(response.body).not.toEqual({});
    });

    it("It should GET Boston's weather", async () => {
        const response = await request(app).get('/boston-weather');
        expect(response.body.title).toEqual('Boston');
    });
});


