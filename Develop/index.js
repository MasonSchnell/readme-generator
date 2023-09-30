const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const project = {
    references: [],
    installation: [],
    contribution: [],
    usageStep: [],
    test: [],
};

// Title
// -----------------------------------------------------------------------
function getTitle() {
    inquirer
        .prompt({
            name: "title",
            message: "Please enter your project title.",
        })
        .then((answer) => {
            project.title = answer.title;
            getDescription();
        });
}

// Description
// -----------------------------------------------------------------------
function getDescription() {
    inquirer
        .prompt({
            name: "description",
            message: "Please enter your project description.",
        })
        .then((answer) => {
            project.description = answer.description;
            addImage();
        });
}

// Image
// -----------------------------------------------------------------------
function addImage() {
    inquirer
        .prompt({
            name: "image",
            message: "Please insert image URL",
        })
        .then((answer) => {
            project.image = answer.image;
            showInstallationMenu();
        });
}

// Installation
// -----------------------------------------------------------------------
let refNum = 1;
function getInstallationSteps() {
    inquirer
        .prompt({
            name: "link",
            message: "Please enter an installation step.",
        })
        .then((answer) => {
            project.installation.push(refNum + ". " + answer.link + "\n");
            refNum++;
            showInstallationMenu();
        });
}

function showInstallationMenu() {
    inquirer
        .prompt({
            name: "choice",
            message: "Please make a choice.",
            type: "list",
            choices: ["Add an installation step", "Next"],
        })
        .then((answer) => {
            switch (answer.choice) {
                case "Add an installation step":
                    return getInstallationSteps();
                default:
                    project.installation = project.installation.join(" ");
                    getUsage();
            }
        });
}

// Usage
// -----------------------------------------------------------------------
let usageStepNum = 1;
function getUsage() {
    inquirer
        .prompt({
            name: "usage",
            message: "Please enter a usage step",
        })
        .then((answer) => {
            project.usageStep.push(usageStepNum + ". " + answer.usage + "\n");
            usageStepNum++;
            showUsageMenu();
        });
}

function showUsageMenu() {
    inquirer
        .prompt({
            name: "usageStep",
            message: "Please make a choice",
            type: "list",
            choices: ["Add usage step", "Next"],
        })
        .then((answer) => {
            switch (answer.usageStep) {
                case "Add usage step":
                    return getUsage();
                default:
                    project.usageStep = project.usageStep.join(" ");
                    showContributingMenu();
            }
        });
}

// Contribution
// -----------------------------------------------------------------------
function getContribution() {
    inquirer
        .prompt({
            name: "cont",
            message: "Please enter a contributing step",
        })
        .then((answer) => {
            project.contribution.push("- " + answer.cont + "\n");
            showContributingMenu();
        });
}

function showContributingMenu() {
    inquirer
        .prompt({
            name: "choice",
            message: "Please make a choice",
            type: "list",
            choices: ["Add contribution step", "Next"],
        })
        .then((answer) => {
            switch (answer.choice) {
                case "Add contribution step":
                    return getContribution();
                default:
                    project.contribution = project.contribution.join(" ");
                    getQuestionsIntructions();
            }
        });
}

// Questions
// -----------------------------------------------------------------------
function getQuestionsIntructions() {
    inquirer
        .prompt({
            name: "questionInstruction",
            message:
                "Please enter instructions on how to reach out to you with additional questions.",
        })
        .then((answer) => {
            project.questionInstruction = answer.questionInstruction;
            getUserName();
        });
}

function getUserName() {
    inquirer
        .prompt({
            name: "userName",
            message: "Please enter your GitHub username",
        })
        .then((answer) => {
            project.userName = answer.userName;
            getProfileLink();
        });
}

function getProfileLink() {
    inquirer
        .prompt({
            name: "profileLink",
            message: "Please enter your profile link",
        })
        .then((answer) => {
            project.profileLink = answer.profileLink;
            getEmail();
        });
}

function getEmail() {
    inquirer
        .prompt({
            name: "email",
            message: "Please enter your email address",
        })
        .then((answer) => {
            project.email = answer.email;
            showTestMenu();
        });
}

// Tests
// -----------------------------------------------------------------------
let usageTestNum = 1;
function getTest() {
    inquirer
        .prompt({
            name: "test",
            message: "Please enter a usage step",
        })
        .then((answer) => {
            project.test.push(usageTestNum + ". " + answer.test + "\n");
            usageTestNum++;
            showTestMenu();
        });
}

function showTestMenu() {
    inquirer
        .prompt({
            name: "testStep",
            message: "Please make a choice",
            type: "list",
            choices: ["Add test step", "Next"],
        })
        .then((answer) => {
            switch (answer.testStep) {
                case "Add test step":
                    return getTest();
                default:
                    project.test = project.test.join(" ");
                    pickLicense();
            }
        });
}

// License
// -----------------------------------------------------------------------
function pickLicense() {
    licenseArray = [];
    inquirer
        .prompt({
            name: "license",
            message: "Please select a licesne.",
            type: "list",
            choices: ["MIT", "ISC", "IPL"],
        })
        .then((answer) => {
            project.license = answer.license;
            showEndMenu();
        });
}

// Starter Menu
// -----------------------------------------------------------------------
function showStartMenu() {
    inquirer
        .prompt({
            name: "choice",
            message: "Please press (Build README) to start.",
            type: "list",
            choices: ["Build README"],
        })
        .then((answer) => {
            switch (answer.choice) {
                case "Build README":
                    return getTitle();
            }
        });
}

// Generate README prompt
// -----------------------------------------------------------------------
function showEndMenu() {
    inquirer
        .prompt({
            name: "choice",
            message: "Please press (Generate README File) to get your results.",
            type: "list",
            choices: ["Generate README File"],
        })
        .then((answer) => {
            switch (answer.choice) {
                case "Generate README File":
                    console.log("generated");
                    console.log(project);
                    generateMarkdown(project);
            }
        });
}

// Initialization
// -----------------------------------------------------------------------
showStartMenu();
