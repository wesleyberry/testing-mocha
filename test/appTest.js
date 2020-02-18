const assert = require('chai').assert;
const app = require('../app');

// Results
let sayHelloResult = app.sayHello();
let addNumbersResult = app.addNumbers(5, 5);

// Tests
describe('App', function() {
    it('sayHello should return hello', () => {
        assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', () => {
        assert.typeOf(sayHelloResult, 'string');
    });

    it('addNumbers should be above five', () => {
        assert.isAbove(addNumbersResult, 5);
    });

    it('addNumbers should return a number', () => {
        assert.typeOf(addNumbersResult, 'number');
    });
});