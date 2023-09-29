const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return "https://img.shields.io/badge/License-MIT-yellow.svg";
        case "ISC":
            return "https://img.shields.io/badge/License-ISC-blue.svg";
        case "IPL":
            return "https://img.shields.io/badge/License-IPL_1.0-blue.svg";
        default:
            return "";
    }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "MIT":
            return "https://opensource.org/licenses/MIT";
        case "ISC":
            return "https://opensource.org/licenses/ISC";
        case "IPL":
            return "https://opensource.org/licenses/IPL-1.0";
        default:
            return "";
    }
}

function wantsInstallation(result) {
    switch (result) {
        case "YES":
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answerObj) {
    const badge = renderLicenseBadge(answerObj.license);
    const licenseLink = renderLicenseLink(answerObj.license);
    const installation1 = answerObj.installation;
    const breakInstallation = installation1.split("\n");
    const formattedList = breakInstallation
        .map((item, index) => `${index + 1}. ${item}`)
        .join("\n");
    console.log(answerObj);
    const md = `
# ${answerObj.userTitle}
## Description 
> ${answerObj.description}

![Developer Photo](${answerObj.image})

## Installation
> ${formattedList}

## License
[![License: ${answerObj.license}](${badge})](${licenseLink})
`;

    fs.writeFile("./README.md", md.trim(), (err) => {
        if (err) throw err;
        console.log("File created succesfully");
    });
}

module.exports = generateMarkdown;
