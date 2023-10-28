// import class 
const Triangle = require('../shapes/triangle.js');

// instance of triangle test
describe('Triangle', () => {
    test('should set color to input', () => {

        // make isntance 
        const shape = new Triangle();

        // use setcolor method 
        shape.setColor("blue");

        // expect this string 
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

