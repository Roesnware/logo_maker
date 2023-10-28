// require packages
const inq = require('inquirer');

// import modules
const svgGenerator = require('./util/svgGenerator.js');
const write = require('./util/write.js')

// array for input 
const promptQuestions = ["What text do you want to include in the logo?", "What text color do you want?", "What shape would you like?", "What shape color do you want to use?"];

// array for shape choices
const shapesList = ["Square", "Triangle", "Circle"];

// initialize func 
function init() {

    // use inquirer
    inq

        // prompt for input 
        .prompt([
            {
                type: 'input',
                message: promptQuestions[0],
                name: 'text',
            },
            {
                type: 'input',
                message: promptQuestions[1],
                name: 'textColor',
            },
            {
                type: 'list',
                message: promptQuestions[2],
                choices: shapesList,
                name: 'shape',
            },
            {
                type: 'input',
                message: promptQuestions[3],
                name: 'shapeColor',
            },
        ])

        // then use that data 
        .then((response) => {

            // spread repsonse to obj 
            let input = { ...response };

            // build data
            let data = svgGenerator(input);

            // destruct to get text 
            let { text, textColor, shape, shapeColor } = input;

            // folder and file anme 
            let folder = "examples";
            let file = `${text}.svg`;

            // call write func
            write(`./${folder}/${file}`, data);
        });
}

// call func 
init();
