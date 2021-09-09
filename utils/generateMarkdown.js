// A function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  let shields = 'https://img.shields.io/badge/License-';
  switch (license) {
    case 'Apache License v2.0':
      return `[![License](${shields}Apache%202.0-blue.svg)]`;
    case 'GNU General Public License v3.0':
      return `[![License: GPL v3](${shields}GPLv3-blue.svg)]`;
    case 'MIT License':
      return `[![License: MIT](${shields}MIT-yellow.svg)]`;
    default:
      return '';
  }
}

// A function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License v2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'GNU General Public License v3.0':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT License':
      return '(https://opensource.org/licenses/MIT)';
    default:
      return '';
  }
}

// A function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
}

// A function that generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

## Description

${data.description}

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)} ${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

With additional questions you can contact ${data.name} here:

Email: [${data.email}](mailto:${data.email})

GitHub: [https://github.com/${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;