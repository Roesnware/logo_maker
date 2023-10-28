// func to generate svg file text
function svgGenerator(input) {
    // destruct input 
    const { text, textColor, shape, shapeColor } = input;

    if (shape == "Circle") {
        // return string of svg file code for triangle
        console.log("circle");
        return `<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" fill=${shapeColor} />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill=${textColor}>${text}</text>
</svg>`;
    } else if (shape == "Square") {
        console.log("square");
        return `<svg width="100" height="100">
    <rect width="200" height="200" fill=${shapeColor} />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill=${textColor}>${text}</text>
</svg>`;
    } else {
        console.log("triangle");
        return `<svg width="100" height="100">
    <polygon points="50,10 0,100 100,100" fill=${shapeColor} />
    <text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" fill=${textColor}>${text}</text>
</svg>`;
    }
}

// export
module.exports = svgGenerator;