// import modules
const Triangle = require('../lib/shapes/triangle.js');
const Circle = require('../lib/shapes/circle.js');
const Square = require('../lib/shapes/square.js');
const Shape = require('../lib/shapes/shape.js');

// func to generate svg file text
function svgGenerator(input) {
    // destruct input 
    const { text, textColor, shape, shapeColor } = input;

    if (shape == "Circle") {

        let cir = new Circle(shapeColor, text, textColor);

        // return string of svg file code for circle
        return `${cir.renderStart()}${cir.render()}${cir.renderText()}${cir.renderEnd()}`;
    } else if (shape == "Square") {

        let squ = new Square(shapeColor, text, textColor);

        // return string of svg file code for square
        return `${squ.renderStart()}${squ.render()}${squ.renderText()}${squ.renderEnd()}`;
    } else {

        let tri = new Triangle(shapeColor, text, textColor);

        // return string of svg file code for triangle
        return `${tri.renderStart()}${tri.render()}${tri.renderText()}${tri.renderEnd()}`;
    }
}



// export
module.exports = svgGenerator;