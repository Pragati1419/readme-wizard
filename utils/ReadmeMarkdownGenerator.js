// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
      return `![Badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== "") {
      return `- [License](#license)`;
    }
    return "";
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== "") {
      return `## License
      This project is licensed under the ${license} license.`;
    }
    return "";
  }
  
  // TODO: Create a function to generate markdown for README
  const generateMarkdown = (data) => {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  💠[Installation](#installation)
  💠[Usage](#usage)
  💠[License](#license)
  💠[Contribution](#contribution)
  💠[Test](#test)
  💠[Credits](#credits)
  💠[Questions](#questions)
  💠[Deployed](#deployed)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contribution
  ${data.contribution}
  
  ## Test
  ${data.test}
  
  ## Credits
  ${data.credits}
  
  ## Questions
  ✉ For any questions, please contact ${data.email}.
  💻You can also find my GitHub profile at:>[${
      data.github
    }] (https://github.com/${data.github}/).
  
  ## Deployed
  This project is deployed at [${data.deployed}].`;
  };
  
  module.exports = generateMarkdown;