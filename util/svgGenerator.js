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
        // return string of svg file code for triangle
        console.log("circle");
        return `<svg width="300" height="200">
    <circle cx="150" cy="100" r="100" fill=${shapeColor} />
    <text x="50%" y="55%" dominant-baseline="middle" font-size=5rem text-anchor="middle" fill=${textColor}>${text}</text>
</svg>`;
    } else if (shape == "Square") {

        let squ = new Square();
        console.log("square");
        return `<svg width="300" height="200">
    <rect width="200" height="200" fill=${shapeColor} />
    <text x="35%" y="50%" dominant-baseline="middle" font-size=5rem text-anchor="middle" fill=${textColor}>${text}</text>
</svg>`;
    } else {

        let tri = new Triangle();
        console.log("triangle");
        return `<svg width="300" height="200">
    <polygon points="150,0 0,300 300,300" fill=${shapeColor} />
    <text x="50%" y="65%" dominant-baseline="middle" font-size=3.5rem text-anchor="middle" fill=${textColor}>${text}</text>
</svg>`;
    }
}



// export
module.exports = svgGenerator;