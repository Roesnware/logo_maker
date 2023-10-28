const Shape = require('./shape.js');

class Square extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor);
    }

    render() {
        return `<rect width="200" height="200" fill=${this.color} />
        <text x="35%" y="50%" dominant-baseline="middle" font-size=5rem text-anchor="middle" fill=${this.textColor}>${this.text}</text>`
    }
}

module.exports = Square;