const Shape = require('./shape.js');

class Circle extends Shape{
//     <svg width="300" height="200">
//     <circle cx="150" cy="100" r="100" fill=${shapeColor} />
//     <text x="50%" y="55%" dominant-baseline="middle" font-size=5rem text-anchor="middle" fill=${textColor}>${text}</text>
// </svg>
    constructor(color, text, textColor){
        super(color, text, textColor);
    }
}

module.exports = Circle;