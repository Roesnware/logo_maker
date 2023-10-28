// import shape module 
const Shape = require('./shape.js');

// circle class from shape 
class Circle extends Shape{

    // render method return string for svg
    render() {
        return `<circle cx="150" cy="100" r="100" fill=${this.color} />`
    }

    // render text emthod return string for text in svg 
    renderText() {
        return `<text x="50%" y="55%" dominant-baseline="middle" font-size=5rem text-anchor="middle" fill=${this.textColor}>${this.text}</text>`
    }
}

// export module 
module.exports = Circle;