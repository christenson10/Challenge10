const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const generateHtml = require('./lib/generateHtml')


const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//Array for input

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your Manager\'s name?',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter your Manager\'s name!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What is your Manager\'s employee ID?',
        validate: idInput => {
            if (idInput) {
                return true
            } else {
                console.log('Please enter employee your ID!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'e-mail',
        message: 'What is your Manager\'s e-mail address?',
        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log('Please enter your e-mail address!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'officenumber',
        message: 'What is your Manager\'s office number?',
        validate: officenumberInput => {
            if (officenumberInput) {
                return true
            } else {
                console.log('Please enter your office number!')
                return false
            }
        }
    },
];

// // If employee is intern - prompt questions

// Needs function to go through questions and collect data from input to put in array

// const questions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the intern\'s name?',
//         validate: nameInput => {
//             if (nameInput) {
//                 return true
//             } else {
//                 console.log('Please enter your intern\'s name!')
//                 return false
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the intern\'s ID?',
//         validate: nameInput => {
//             if (nameInput) {
//                 return true
//             } else {
//                 console.log('Please enter your intern\'s ID!')
//                 return false
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the intern\'s email?',
//         validate: nameInput => {
//             if (nameInput) {
//                 return true
//             } else {
//                 console.log('Please enter your intern\'s email!')
//                 return false
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the intern\'s school name?',
//         validate: nameInput => {
//             if (nameInput) {
//                 return true
//             } else {
//                 console.log('Please enter your intern\'s school name!')
//                 return false
//             }
//         }
//     },
// ];

// // If employee is engineer - prompt questions

// const questions = [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the engineer\'s name?',
//         validate: nameInput => {
//             if (nameInput) {
//                 return true
//             } else {
//                 console.log('Please enter your engineer\'s name!')
//                 return false
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the engineer\'s ID?',
//         validate: nameInput => {
//             if (nameInput) {
//                 return true
//             } else {
//                 console.log('Please enter your engineer\'s ID!')
//                 return false
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the engineer\'s email?',
//         validate: nameInput => {
//             if (nameInput) {
//                 return true
//             } else {
//                 console.log('Please enter your engineer\'s email!')
//                 return false
//             }
//         }
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is the engineer\'s GitHub username?',
//         validate: nameInput => {
//             if (nameInput) {
//                 return true
//             } else {
//                 console.log('Please enter your engineer\'s GitHub username!')
//                 return false
//             }
//         }
//     },
// ];

// Loop through array to create small cards

// Function to write HTML file and initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (answers) {
        const htmlAnswers = generateHtml(answers)
        console.log(htmlAnswers)
        fs.writeFileSync('./dist/index.html', htmlAnswers, function(err) {
            return console.log(err);
          });
    })
}

init();