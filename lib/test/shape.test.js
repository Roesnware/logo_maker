// import class 
const Shape = require('../shapes/shape.js');

// instance of shape test
describe('Shape', () => {
    test('should make instance of shape', () => {

        // make isntance 
        const shape = new Shape();

        // expect this 
        expect(shape instanceof Shape);
    });
});