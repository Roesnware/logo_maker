// import class 
const Square = require('../shapes/square.js');

// instance of square test
describe('Square', () => {
    // test for shape color
    test('should set color to input', () => {

        // make isntance 
        const shape = new Square();

        // use setcolor method 
        shape.setColor("blue");

        // expect this string 
        expect(shape.render()).toEqual('<rect width="200" height="200" fill="blue" />');
    });
    // test for text and text color
    test('should set text and text color to input', () => {

        // make isntance 
        const shape = new Square();

        // use settext and settextcolor method 
        shape.setText("SVG");
        shape.setTextColor("white");

        // expect this string 
        expect(shape.renderText()).toEqual('<text x="50%" y="65%" dominant-baseline="middle" font-size=3.5rem text-anchor="middle" fill="white">SVG</text>');
    });
});