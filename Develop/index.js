const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const project = {
    references: [],
    installation: [],
};

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

function getDescription() {
    inquirer
        .prompt({
            name: "description",
            message: "Please enter your project description.",
        })
        .then((answer) => {
            project.description = answer.description;
            showInstallationMenu();
        });
}

let refNum = 1;
function getInstallationSteps() {
    inquirer
        .prompt({
            name: "link",
            message: "Please enter the installation steps one by one.",
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
                    pickLicense();
            }
        });
}

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
            addImage();
        });
}

function addImage() {
    inquirer
        .prompt({
            name: "image",
            message: "Please insert image URL",
        })
        .then((answer) => {
            project.image = answer.image;
            showMainMenu();
        });
}

function showMainMenu() {
    inquirer
        .prompt({
            name: "choice",
            message: "Please choose a menu item.",
            type: "list",
            choices: ["Build README", "Generate README File"],
        })
        .then((answer) => {
            switch (answer.choice) {
                case "Build README":
                    return getTitle();
                default:
                    console.log("generated");
                    console.log(project);
                    generateMarkdown(project);
                // process.exit();
            }
        });
}

showMainMenu();
