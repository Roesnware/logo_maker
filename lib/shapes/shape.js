// class for shapes 
class Shape {
    // func to set shape color 
    setColor(color) {
        this.color = color;
    }

    // func to set text
    setText(text) {
        this.text = text;
    }

    // func to set text coloe
    setTextColor(textColor) {
        this.textColor = textColor;
    }

    // func to render start string for svg 
    renderStart() {
        return `<svg width="300" height="200">`;
    }

    // func to render end string for svg 
    renderEnd() {
        return `</svg>`;
    }
}

// export module 
module.exports = Shape;