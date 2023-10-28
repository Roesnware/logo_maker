const inq = require('inquirer');
const fs = require('fs');

inq
    .prompt([
        {

        },
        {

        },
    ])
    .then((answers) => {
        const svgCode = generateSVG(answers);
    
        fs.writeFile(`${answers.text}.html`, svgCode, (err) => {
          err ? console.log(err) : console.log('Successfully created SVG file');
        }
        );    
    });