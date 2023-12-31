const licenses = {
  MIT: {
    badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
    link: "https://opensource.org/licenses/MIT",
    section: "MIT License"
  },
  GNU: {
    badge: "(https://img.shields.io/badge/License-GPLv3-blue.svg",
    link: "https://www.gnu.org/licenses/gpl-3.0",
    section: "GNU GPLv3"
  },
  Apache: {
    badge: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    link: "https://opensource.org/licenses/Apache-2.0",
    section: "Apache License 2.0"
  },
  BSD: {
    badge: "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
    link: "https://opensource.org/licenses/BSD-3-Clause",
    section: "BSD 3-Clause License"
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (licenses[license]) {
    return licenses[license].badge;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (licenses[license]) {
    return licenses[license].link;
  }
  return '';
}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (licenses[license]) {
    return licenses[license].section;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  const licenseBadge = renderLicenseBadge(response.license);
  const licenseLink = renderLicenseLink(response.license);
  const licenseSection = renderLicenseSection(response.license);


  return `
  # ${response.Title}

  ## Description
  ${response.description}

  ## Table of Contents
  [Title](#Title)
  [description](#description)
  [install](#install)
  [Usage](#Usage)
  [Contributing](#Contributing)
  [tests](#tests)
  [license](#license)

  ## Installation
  ${response.install}

  ## Usage
  ${response.Usage}

  ## Contributing
  ${response.Contributing}

  ## Tests
  ${response.tests}

  ## license
  ${licenseSection}
  ${licenseBadge}
  ${licenseLink}

`;
}


module.exports = generateMarkdown;


