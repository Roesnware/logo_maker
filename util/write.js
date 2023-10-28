// import packages
const fs = require('fs');

// func to write to file 
function writeToFile(fileName, data) {

    // write a file from input 
    fs.writeFile(fileName, data, (err) => {

        // ternary log err if err else log success
        err ? console.log(err) : console.log('Successfully created SVG file!');
    }
    );
}

// export module
module.exports = writeToFile;