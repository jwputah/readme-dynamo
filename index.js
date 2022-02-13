// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const answers = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Install',
            message: 'What are the steps required to install you project? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter required steps to install project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How does the user interact with the application? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter a description of usage for app!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Contributors',
            message: 'Enter contributions for the project (Required)',
            validate: contributionsInput => {
                if (contributionsInput) {
                    return true;
                } else {
                    console.log('Please enter any contributors to the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command to run tests?',
            default: 'npm test'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'GNU'],
            default: ["MIT"],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please choose a license!');
                    return false;
                }
            }
        },

    ]);
};
// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};

// Function call to initialize app
promptUser()
// function for user input
    .then(answers => {
    return generatePage(answers);
})
// function for data to writefile in markdown
    .then(data => {
        console.log(answers);
        return writeFile(data);
})
// function to catch errors
    .catch (err => {
    console.log(err);
});