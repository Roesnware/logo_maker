// import modules
const Triangle = require('../lib/shapes/triangle.js');
const Circle = require('../lib/shapes/circle.js');
const Square = require('../lib/shapes/square.js');

// func to generate svg file text
function svgGenerator(input) {
    // destruct input 
    const { text, textColor, shape, shapeColor } = input;

    if (shape == "Circle") {

        let cir = new Circle();

        // return string of svg file code for circle
        return `<svg width="300" height="200"></svg>`;
    } else if (shape == "Square") {

        let squ = new Square();

        // return string of svg file code for square
        return `<svg width="300" height="200"></svg>`;
    } else {

        let tri = new Triangle();

        // return string of svg file code for triangle
        return `<svg width="300" height="200"></svg>`;
    }
}



// export
module.exports = svgGenerator;