const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const generateHtml = require('./dist/generateHTML')

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

// Function to write HTML file and initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (answers) {
        const htmlAnswers = generateHtml(answers)
        console.log(htmlAnswers)
        fs.writeFileSync('index.html', htmlAnswers, function(err) {
            return console.log(err);
          });
    })
}

init();

// function generateHtml(data) {
//     console.log(data)
// };
  
// module.exports = generateHtml;