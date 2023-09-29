// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"); // Import the fs module
const tools = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "userTitle",
        message: "What would you like your title to be?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description for your project.",
    },
    {
        type: "input",
        name: "image",
        message: "Please include a picture URL for your project.",
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["MIT", "ISC", "IPL"],
    },
    {
        type: "numbered-list",
        name: "installation",
        message: "Input instructions",
    },
];

function promptUser() {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser()
    .then((answers) => {
        tools(answers);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
