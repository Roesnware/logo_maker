// import modules
const Triangle = require('../lib/shapes/triangle.js');
const Circle = require('../lib/shapes/circle.js');
const Square = require('../lib/shapes/square.js');

// func to generate svg file text
function svgGenerator(input) {

    // destruct input 
    const { text, textColor, shape, shapeColor } = input;

    // if input shape is circle 
    if (shape == "Circle") {

        // make circle instance 
        let cir = new Circle();
        cir.setColor(shapeColor);
        cir.setText(text);
        cir.setTextColor(textColor);

        // return string of svg file code for circle
        return `${cir.renderStart()}${cir.render()}${cir.renderText()}${cir.renderEnd()}`;
    } else if (shape == "Square") {

        // make square instance 
        let squ = new Square();
        squ.setColor(shapeColor);
        squ.setText(text);
        squ.setTextColor(textColor);

        // return string of svg file code for square
        return `${squ.renderStart()}${squ.render()}${squ.renderText()}${squ.renderEnd()}`;
    } else {

        // make square instance 
        let tri = new Triangle();
        tri.setColor(shapeColor);
        tri.setText(text);
        tri.setTextColor(textColor);

        // return string of svg file code for triangle
        return `${tri.renderStart()}${tri.render()}${tri.renderText()}${tri.renderEnd()}`;
    }
}

// export
module.exports = svgGenerator;