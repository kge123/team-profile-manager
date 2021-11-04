const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'number',
            message: 'What is your ID#?',
            name: 'idnumber',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
    .then((response) =>
        response.confirm === response.input
        ? console.log('Thank you')
        : console.log('Something went wrong')
    );