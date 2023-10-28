const Shape = require('./shape.js');

class Circle extends Shape{
//     <svg width="300" height="200">
//     </svg>
    constructor(color, text, textColor){
        super(color, text, textColor);
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill=${this.color} />
        <text x="50%" y="55%" dominant-baseline="middle" font-size=5rem text-anchor="middle" fill=${this.textColor}>${this.text}</text>`
    }
}

module.exports = Circle;