// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

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

### instructions
${instructions}
## Credits
${credit}


# Contact
* GitHub :${git}
* LinkedIn :${linkedin}
* E-mail :${email}`;

// Function to create readme using fs
createNewFile(title, template);
}
);

// TODO: Create a function to write README file
// Creating createNewFile function
function createNewFile(fileName, data) {
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
