// require packages needed for application: inquirer, fs, & generateMarkdown
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// Array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Briefly describe the project\'s purpose:',
    name: 'description',
    },
    {
    type: 'input',
    message: 'What steps should be taken to install the application?',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'How is the application used?',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'What resources should be crediting for developing this application?',
    name: 'credits',
    },
    {
    type: 'input',
    message: 'How should developers contribute to this project?',
    name: 'contributing',
    },
    {
    type: 'input',
    message: 'What tests can be run on this application?',
    name: 'tests',
    },
    // {
    // type: 'list',
    // message: 'Which license would you like to include for this application?',
    // name: 'license',
    // choices: [],
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) =>
        console.log(generateMarkdown(response))
        // writeToFile('README.md', generateMarkdown(response))
    )
}

// Function call to initialize app
init();
