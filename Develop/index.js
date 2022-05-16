const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ github,email, project, tests, description,features,installation,using,contributers }) =>
`# ${project}

## Description

${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#using)
- [Credits](#credits)
- [Contact](#contact)

## Installation

To install Dependencies and tests use ${installation} in the Terminal

## Tests
${tests}

## Using the Repo and Contributinting

Some things to know when using the Repo or info on how to use it:

${using}

## Credits

${contributers}

## Features

Some Features and Techonolgies used are ${features}

## Contact

My github is [github.com/${github}](https://github.com/${github}) and my email is ${email}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email adress?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a short description about your project?',
    },
    {
      type: 'input',
      name: 'features',
      message: 'What features do your project have?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'what kind of license should your project have?',
      choices: ['MIT', 'APACHE','GPL','BSD','none'],
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install your dependencies?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to install your tests?',
    },
    {
      type: 'input',
      name: 'using',
      message: 'What does the user need to know about using the repo and how to contribute?',
    },
    {
      type: 'input',
      name: 'contributers',
      message: 'list the github user names of the people who helped make this project?',
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created READ.me !')
    );
  });