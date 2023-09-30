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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answerObj) {
    const badge = renderLicenseBadge(answerObj.license);
    const licenseLink = renderLicenseLink(answerObj.license);

    const md = `
# ${answerObj.title}
## Description 
> ${answerObj.description}

![Developer Photo](${answerObj.image}) 

# Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation
${answerObj.installation}

## License
[![License: ${answerObj.license}](${badge})](${licenseLink})
`;

    fs.writeFile("./README.md", md.trim(), (err) => {
        console.log("inside");
        if (err) throw err;
        console.log("File created succesfully");
    });
}

module.exports = generateMarkdown;
