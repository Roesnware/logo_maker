const Shape = require('./shape.js');

class Triangle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill=${this.color} />`
    }

    renderText() {
        return `<text x="50%" y="65%" dominant-baseline="middle" font-size=3.5rem text-anchor="middle" fill=${this.textColor}>${this.text}</text>`
    }
}

module.exports = Triangle;