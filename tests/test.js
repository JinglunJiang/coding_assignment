const request = require('supertest');
const app = require('../server');

describe('POST /save', () => {
  it('Firstname contains not char', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: '!Noella', lastName: 'Jiang', dob: '02/18/2001' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });

  it('Firstname is NULL', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: null, lastName: 'Jiang', dob: '02/18/2001' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });

  it('Firstname is a number', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: 1, lastName: 'Jiang', dob: '02/18/2001' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });

  it('Firstname too long', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', lastName: 'Jiang', dob: '02/18/2001' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });
});

describe('POST /save', () => {
  it('Lastname too long', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: 'Noella', lastName: 'JiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiang', dob: '02/18/2001' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });

  it('Lastname contains not char', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: 'Noella', lastName: 'Jiang!', dob: '02/18/2001' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });

  it('Lastname is not a string', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: 'Noella', lastName: 111, dob: '02/18/2001' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });

  it('Lastname is null', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: 'Noella', lastName: null, dob: '02/18/2001' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });
});

describe('POST /save', () => {
  it('DOB month out of range', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: 'Noella', lastName: 'Jiang', dob: '50/01/2001' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });

  it('DOB date out of range', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: 'Noella', lastName: 'Jiang', dob: '02/55/2001' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });

  it('DOB date out of range', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: 'Noella', lastName: 'Jiang', dob: '18/02/2001' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });

  it('format wrong', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: 'Noella', lastName: 'Jiang', dob: '2001-02-18' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });

  it('not numbers', async () => {
    const response = await request(app)
      .post('/save')
      .send({ firstName: 'Noella', lastName: 'Jiang', dob: '18/02/200?' });
    
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Invalid input data' });
  });
});