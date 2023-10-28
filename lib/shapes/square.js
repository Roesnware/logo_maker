const Shape = require('./shape.js');

class Square extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor);
    }
}

module.exports = Square;