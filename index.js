// require packages
const inq = require('inquirer');
const fs = require('fs');

// use inquirer
inq
    // prompt for input 
    .prompt([
        {

        },
        {

        },
    ])
    // then use that data 
    .then((answers) => {
        // var to store code for svg file 
        const svgCode = generateSVG(answers);
    
        // write SVG file using answers 
        fs.writeFile(`${answers.text}.html`, svgCode, (err) => {
            // if error log error else log success
          err ? console.log(err) : console.log('Successfully created SVG file');
        }
        );    
    });