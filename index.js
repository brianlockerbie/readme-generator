// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: "What is the title of your project? (Required)",
            name: 'title',
            validate: nameValue => {
                if(nameValue) {
                    return true;
                } else {
                    console.log("Enter project title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "What are the instructions to be followed?",
            name: 'instructions',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: "How do you install your app?",
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: "Are there any credits?",
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            // list of licenses
            type: 'list',
            message: "What license did you use for your app?",
            name: 'license',
            choices:['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
        {
            type: 'input',
            message: 'GitHub username:',
            name: 'git',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}}
        },
        {
            type: 'input',
            message: 'E-mail:',
            name: 'email',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        },
];


// TODO: Create a function to write README file
// Creating createNewFile function
function writeToFile(fileName, data) {
// fs
fs.writeFile(`./dist/${fileName}.md`, generateMarkdown(data), err => {
    if(err) {
        console.log(err)
    }
    console.log('Your README has been generated');
})
}

// Create a function to initialize app
init = () => {
    return inquirer
    .prompt(questions)
    .then(readMeData => {
        const { title } = readMeData
        return writeToFile(title, readMeData);
    })
    .then(result => {
        console.log(result);
    })
}

// Function call to initialize app
init();
