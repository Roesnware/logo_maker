// import class 
const Triangle = require('../shapes/triangle.js');

// instance of triangle test
describe('Triangle', () => {
    // test for shape color
    test('should set color to input', () => {

        // make isntance 
        const shape = new Triangle();

        // use setcolor method 
        shape.setColor("blue");

        // expect this string 
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
    // test for text and text color
    test('should set text and text color to input', () => {

        // make isntance 
        const shape = new Triangle();

        // use settext and settextcolor method 
        shape.setText("SVG");
        shape.setTextColor("white");

        // expect this string 
        expect(shape.renderText()).toEqual('<text x="50%" y="65%" dominant-baseline="middle" font-size=3.5rem text-anchor="middle" fill="white">SVG</text>');
    });
});

