const Exam = require('../models/Exam');
const assert = require('assert');
const request = require('supertest');
const app = require('../server');

describe('The Express app', () => {
  it('handles a POST requests to /api/pullquestion', done => {
    const req = {
      startDate: '2018-11-07T05:54:25.054Z',
      name: 'test name',
      difficulty: '',
      timeLimit: 20,
      number: '3',
      multiplechoice: '',
      questionList: [],
      valid: true
    };
    request(app)
      .post('/api/pullquestion')
      .send(req)
      .end((err, res) => {
        assert(parseInt(req.number) === res.body.length);
        done();
      });
  });

  it('handles a POST requests to /api/createtest', done =>{
    const req = {
      startDate: '2018-11-07T05:54:25.054Z',
      name: 'super hard',
      difficulty: '',
      timeLimit: 20,
      number: '3',
      multiplechoice: '',
      questionList: [],
      valid: true
    }
    Exam.count().then(count =>{
      console.log("count: "+count);
      request(app)
      .post('/api/createtest')
      .send(req)
      .end(()=>{
        Exam.count().then(newCount => {
          console.log("newCount: "+newCount);
          assert(count +1 === newCount);
          done();
        })
      })
    })
  })
});


