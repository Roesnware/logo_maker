// import shapoe module 
const Shape = require('./shape.js');

// class for square 
class Square extends Shape{

    // render method to return stirng for svg 
    render() {
        return `<rect width="200" height="200" fill=${this.color} />`
    }

    // render text method to return string for text inside svg 
    renderText() {
        return `<text x="35%" y="50%" dominant-baseline="middle" font-size=5rem text-anchor="middle" fill=${this.textColor}>${this.text}</text>`
    }
}

// export module 
module.exports = Square;