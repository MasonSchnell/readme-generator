const fs = require("fs");

function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return "https://img.shields.io/badge/License-MIT-yellow.svg";
        case "ISC":
            return "https://img.shields.io/badge/License-ISC-blue.svg";
        case "GPL-3.0":
            return "https://img.shields.io/badge/License-GPL_3.0-blue.svg";
        case "Apache-2.0":
            return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
        case "BSD-3-Clause":
            return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
        case "LGPL-3.0":
            return "https://img.shields.io/badge/License-LGPL_3.0-blue.svg";
        case "MPL-2.0":
            return "https://img.shields.io/badge/License-MPL_2.0-blue.svg";
        case "Unlicense":
            return "https://img.shields.io/badge/License-Unlicense-lightgrey.svg";
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
        case "GPL-3.0":
            return "https://opensource.org/licenses/GPL-3.0";
        case "Apache-2.0":
            return "https://opensource.org/licenses/Apache-2.0";
        case "BSD-3-Clause":
            return "https://opensource.org/licenses/BSD-3-Clause";
        case "LGPL-3.0":
            return "https://opensource.org/licenses/LGPL-3.0";
        case "MPL-2.0":
            return "https://opensource.org/licenses/MPL-2.0";
        case "Unlicense":
            return "";
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
- GitHub Profile: [${answerObj.userName}](https://github.com/${answerObj.userName})
- Email: ${answerObj.email}

${answerObj.questionInstruction}

## License
This project is licensed under the [${answerObj.license} license](${licenseLink}).
`;

    fs.writeFile("./README.md", md.trim(), (err) => {
        if (err) throw err;
    });
}

module.exports = generateMarkdown;
