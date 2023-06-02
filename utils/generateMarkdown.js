// license names and badge links
const licenses = [
  { 
    lic: 'Apache 2.0 License',
    badge: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }, 
  {
    lic: 'Boost Software License 1.0',
    badge: `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }, 
  {
    lic: 'BSD 3-Clause License',
    badge: `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }, 
  { 
    lic: 'BSD 2-Clause License',
    badge: `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }, 
  {   
    lic: 'CC0',
    badge: `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`  
  }, 
  {
    lic: 'Attribution 4.0 International',
    badge: `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`
  }, 
  { 
    lic: 'Attribution-ShareAlike 4.0 International',
    badge: `[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)`
  }, 
  { 
    lic: 'Attribution-NonCommercial 4.0 International',
    badge: `[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)`
  }, 
  { 
    lic: 'Attribution-NoDerivates 4.0 International',
    badge: `[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)`
  }, 
  { 
    lic: 'Attribution-NonCommmercial-ShareAlike 4.0 International',
    badge: `[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)`
  }, 
  { 
    lic: 'Attribution-NonCommercial-NoDerivatives 4.0 International',
    badge: '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)'
  },
  {
    lic: 'Eclipse Public License 1.0',
    badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }, 
  {
    lic: 'GNU GPL v3',
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }, 
  { 
    lic: 'GNU GPL v2',
    badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }, 
  { 
    lic: 'GNU AGPL v3',
    badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  }, 
  { 
    lic: 'GNU LGPL v3',
    badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }, 
  { 
    lic: 'GNU FDL v1.3',
    badge: '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)'
  }, 
  {
    lic: 'The Hippocratic License 2.1',
    badge: '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)'
  }, 
  {
    lic: 'The Hippocratic License 3.0',
    badge: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)'
  },
  {
    lic: 'IBM Public License Version 1.0',
    badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  }, 
  {
    lic: 'ISC License (ISC)',
    badge: '[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }, 
  {
    lic: 'The MIT License',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }, 
  {
    lic: 'Mozilla Public License 2.0',
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }, 
  {
    lic: 'Attribution License (BY)',
    badge: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'  
  }, 
  {
    lic: 'Open Database License (ODbL)',
    badge: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)' 
  },
  {
    lic: 'Public Domain Dedication and License (PDDL)',
    badge: '[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)'  
  },
  {
    lic: 'The Perl License',
    badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
  },
  {
    lic: 'The Artistic License 2.0',
    badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
  },
  {
    lic: 'SIL Open Font License 1.1',
    badge: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'
  },
  {
    lic: 'The Unlicense',
    badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  },
  {
    lic: 'The Do What the Fuck You Want to Public License',
    badge: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)' 
  },
  {
    lic: 'The zlib/libpng License',
    badge: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
  }
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (!license) {
  //   return '';
  // } else {

  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  
## Description  

${data.description}  

## Table of Contents  

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation  

${data.installation}  

## Usage  

${data.usage}  

## Credits  

${data.credits}

## Contributing  

${data.contributing}  

## Tests  

${data.tests}  

## License  

${data.license}

`;
}

module.exports = generateMarkdown;

