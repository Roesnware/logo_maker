// import class 
const Circle = require('../shapes/circle.js');

// instance of circle test
describe('Circle', () => {
    // test for shape color
    test('should set color to input', () => {

        // make isntance 
        const shape = new Circle();

        // use setcolor method 
        shape.setColor("blue");

        // expect this string 
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />');
    });
    // test for text and text color
    test('should set text and text color to input', () => {

        // make isntance 
        const shape = new Circle();

        // use settext and settextcolor method 
        shape.setText("SVG");
        shape.setTextColor("white");

        // expect this string 
        expect(shape.renderText()).toEqual('<text x="50%" y="55%" dominant-baseline="middle" font-size=5rem text-anchor="middle" fill="white">SVG</text>');
    });
});

