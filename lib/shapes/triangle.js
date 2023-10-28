// import shpaes module 
const Shape = require('./shape.js');

// class for triangle 
class Triangle extends Shape{

    // render method to reutunr string for svg 
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }

    // render text method to return string for text inside svg 
    renderText() {
        return `<text x="50%" y="65%" dominant-baseline="middle" font-size=3.5rem text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

// export module 
module.exports = Triangle;