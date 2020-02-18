const assert = require('chai').assert;
const app = require('../app');

// Tests
describe('App', function() {
    describe('sayHello()', () => {
        let sayHelloResult = app.sayHello();
        it('sayHello should return hello', () => {
            assert.equal(sayHelloResult, 'hello');
        });
    
        it('sayHello should return type string', () => {
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers()', () => {
        let addNumbersResult = app.addNumbers(5, 5);
        it('addNumbers should be above five', () => {
            assert.isAbove(addNumbersResult, 5);
        });
    
        it('addNumbers should return a number', () => {
            assert.typeOf(addNumbersResult, 'number');
        });
    });
});