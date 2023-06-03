// Require packages needed for application: inquirer, fs, & generateMarkdown
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// Array for list of licenses to choose from
const licenseoptions = [
    'Apache 2.0 License','Boost Software License 1.0','BSD 3-Clause License','BSD 2-Clause License','CC0','Attribution 4.0 International','Attribution-ShareAlike 4.0 International','Attribution-NonCommercial 4.0 International','Attribution-NoDerivates 4.0 International','Attribution-NonCommmercial-ShareAlike 4.0 International','Attribution-NonCommercial-NoDerivatives 4.0 International','Eclipse Public License 1.0','GNU GPL v3','GNU GPL v2','GNU AGPL v3','GNU LGPL v3','GNU FDL v1.3','The Hippocratic License 2.1','The Hippocratic License 3.0','IBM Public License Version 1.0','ISC License (ISC)','The MIT License','Mozilla Public License 2.0','Attribution License (BY)','Open Database License (ODbL)','Public Domain Dedication and License (PDDL)','The Perl License','The Artistic License 2.0','SIL Open Font License 1.1','The Unlicense','The Do What the Fuck You Want to Public License', 'The zlib/libpng License'
]

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
    {
    type: 'list',
    message: 'Which license would you like to include for this application?',
    name: 'license',
    choices: licenseoptions,
    },
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
    },
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    },
];

// writeFile for creating README with response data
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README has been generated');
    })
}

// Triggers prompt for questions and passes responses to generated README file
function init() {
    console.log('Welcome to the README Generator. Please provide responses to create your README');
    inquirer.prompt(questions).then((response) => {
        writeToFile('Generated_README.md', generateMarkdown(response))
    })
}

// Function call to initialize app
init();
