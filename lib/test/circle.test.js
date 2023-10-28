// import class 
const Circle = require('../shapes/circle.js');

// instance of circle test
describe('Circle', () => {
    test('should set color to input', () => {

        // make isntance 
        const shape = new Circle();

        // use setcolor method 
        shape.setColor("blue");

        // expect this string 
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />');
    });
});

