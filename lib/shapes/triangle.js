const Shape = require('./shape.js');

class Triangle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor);
    }
}

module.exports = Triangle;