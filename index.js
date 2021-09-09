const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title your project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Instructions to install:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license (use arrow keys):',
        choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License', 'none']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

function writeToFile() {
    inquirer
        .prompt(questions)
        .then((data) => {
            fs.writeFile('README.md', generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('Success! Created README.md')
            );
        });

}

writeToFile();