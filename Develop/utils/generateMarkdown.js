const fs = require("fs");

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

function generateMarkdown(answerObj) {
    const badge = renderLicenseBadge(answerObj.license);
    const licenseLink = renderLicenseLink(answerObj.license);

    const md = `
# ${answerObj.title}
[![License: ${answerObj.license}](${badge})](${licenseLink})
## Description 
> ${answerObj.description}

![Developer Photo](${answerObj.image}) 

# Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
4. [Contributing](#contributing)
5. [Questions](#questions)
6. [Tests](#tests)
7. [License](#license)


## Installation
To install this project, follow these steps:
${answerObj.installation}

## Usage
How to use project:
${answerObj.usageStep}

## Contributing
Ways you can contribute:
${answerObj.contribution}

## Tests
To run the project's tests, follow these steps:
${answerObj.test}

## Questions
- GitHub Profile: [${answerObj.userName}](${answerObj.profileLink})
- Email: ${answerObj.email}

${answerObj.questionInstruction}

## License
This project is licensed under the [${answerObj.license} license](${licenseLink}).
`;

    fs.writeFile("./README.md", md.trim(), (err) => {
        if (err) throw err;
        console.log("File created succesfully");
    });
}

module.exports = generateMarkdown;
