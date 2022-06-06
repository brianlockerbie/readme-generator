// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');

// TODO: Create an array of questions for user input
inquirer.prompt(
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
            validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
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
        }
    ]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution
}) => {
// template to be used
const template = `# ${title}

* [Installation](#installation)
* [Usage](#usage)
* [contribution](#contribution)
* [Credits](#credits)
* [License](#license)
* Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
### instructions
${instructions}
## Credits
${credit}
## License
${license}

# Contact
* GitHub :${git}
* LinkedIn :${linkedin}
* E-mail :${email}`;

// Function to create readme using fs
createNewFile(title, template);
}
);

// Creating createNewFile function
function createNewFile(fileName, data) {
// fs
fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.nd`, data, (err) => {
    if(err) {
        console.log(err)
    }
    console.log('Your README has been generated');
})


}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
