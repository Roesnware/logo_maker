// require packages
const inq = require('inquirer');
const fs = require('fs');


function writeToFile(fileName, data) {
    // make a file from input 
    fs.writeFile(fileName, data, function (err) {
        console.log(err)
    }
    )
}

function init() {
    // use inquirer
    inq
        // prompt for input 
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'

            },
            {

            },
        ])
        // then use that data 
        .then((response) => {
            // spread repsonse to obj 
            let input = { ...response };

            // build data
            let data = svgGenerator(input);

            // folder and file anme 
            let folder = "";
            let file = ""

            // call write func
            writeToFile(`./${folder}/${file}`, data);
        });
}
