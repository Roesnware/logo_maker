// import class 
const Square = require('../shapes/square.js');

// instance of square test
describe('Square', () => {
    test('should set color to input', () => {

        // make isntance 
        const shape = new Square();

        // use setcolor method 
        shape.setColor("blue");

        // expect this string 
        expect(shape.render()).toEqual('<rect width="200" height="200" fill="blue" />');
    });
});