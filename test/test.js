var request = require('supertest');

var app = require('../index.js');describe('GET /', function() {

 it('respond with hello sabko', function(done) { //navigate to root and check the the response is "hello sabko"

 request(app).get('/').expect('hello sabko', done);

 });

});
