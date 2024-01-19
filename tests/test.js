// const request = require('supertest');
// const app = require('../server');

// describe('POST /save', () => {
//   it('Firstname contains not char', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: '!Noella', lastName: 'Jiang', dob: '02/18/2001' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });

//   it('Firstname is NULL', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: null, lastName: 'Jiang', dob: '02/18/2001' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });

//   it('Firstname is a number', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: 1, lastName: 'Jiang', dob: '02/18/2001' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });

//   it('Firstname too long', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', lastName: 'Jiang', dob: '02/18/2001' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });
// });

// describe('POST /save', () => {
//   it('Lastname too long', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: 'Noella', lastName: 'JiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiangJiang', dob: '02/18/2001' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });

//   it('Lastname contains not char', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: 'Noella', lastName: 'Jiang!', dob: '02/18/2001' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });

//   it('Lastname is not a string', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: 'Noella', lastName: 111, dob: '02/18/2001' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });

//   it('Lastname is null', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: 'Noella', lastName: null, dob: '02/18/2001' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });
// });

// describe('POST /save', () => {
//   it('DOB month out of range', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: 'Noella', lastName: 'Jiang', dob: '50/01/2001' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });

//   it('DOB date out of range', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: 'Noella', lastName: 'Jiang', dob: '02/55/2001' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });

//   it('DOB date out of range', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: 'Noella', lastName: 'Jiang', dob: '18/02/2001' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });

//   it('format wrong', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: 'Noella', lastName: 'Jiang', dob: '2001-02-18' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });

//   it('not numbers', async () => {
//     const response = await request(app)
//       .post('/save')
//       .send({ firstName: 'Noella', lastName: 'Jiang', dob: '18/02/200?' });
    
//     expect(response.status).toBe(400);
//     expect(response.body).toEqual({ message: 'Invalid input data' });
//   });
// });

const validation = require('../validation');

describe('isValidFirstName', () => {
  it('should return true for a valid first name', () => {
    expect(validation.isValidFirstName('Noella')).toBe(true);
  });

  it('should return false for a first name with non-alphabet characters', () => {
    expect(validation.isValidFirstName('Noella123')).toBe(false);
  });

  it('should return false for a first name longer than 30 characters', () => {
    expect(validation.isValidFirstName('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDE')).toBe(false);
  });

  it('should return false for a first name that is null', () => {
    expect(validation.isValidFirstName(null)).toBe(false);
  });
});

describe('isValidLastName', () => {
  it('should return true for a valid last name', () => {
    expect(validation.isValidLastName('Jiang')).toBe(true);
  });

  it('should return false for a last name with non-alphabet characters', () => {
    expect(validation.isValidLastName('Jiang!')).toBe(false);
  });

  it('should return false for a last name longer than 50 characters', () => {
    expect(validation.isValidLastName('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(false);
  });

  it('should return false for a last name with null value', () => {
    expect(validation.isValidLastName(null)).toBe(false);
  });
});

describe('isValidDOB', () => {
  it('should return true for a valid date of birth', () => {
    expect(validation.isValidDOB('02/28/2001')).toBe(true);
  });

  it('should return false for an invalid date format', () => {
    expect(validation.isValidDOB('2021-02-28')).toBe(false);
  });

  it('should return false for an invalid date', () => {
    expect(validation.isValidDOB('02/35/2001')).toBe(false);
  });

  it('should return false for none numeric values', () => {
    expect(validation.isValidDOB('ab/12/1990')).toBe(false);
  });
});