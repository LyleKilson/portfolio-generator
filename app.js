const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      message: "What is your name?",
      type: "input",
      name: "name",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!')
          return false;
        }
      }
    },
    {
      message: "Enter your GitHub Username",
      type: "input",
      name: "github",
      validate: githubUsernameInput => {
        if (githubUsernameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub Username!')
          return false;
        }
      }
    },
    {
      message: "Provide some information about yourself:",
      type: "input",
      name: "about",
      validate: aboutInput => {
        if (aboutInput) {
          return true;
        } else {
          console.log('Please enter some information about yourself!')
          return false;
        }
      }
    },
  ]);
};

const promptProject = portfolioData => {
  // If there's no 'projects' arrray property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(`
  =================
  Add a New Project
  =================
  `);
  return inquirer.prompt([
    {
      message: "What is the name of your project?",
      type: "input",
      name: "name",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of the project (Required)",
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What did you build this project with? (Check all that apply)",
      choices: [
        "JavaScript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node",
      ],
    },
    {
      type: "input",
      name: "link",
      message: "Enter the GitHub link to your project. (Required)",
    },
    {
      type: "confirm",
      name: "feature",
      message: "Would you like to feature this project?",
      default: false,
    },
    {
      type: "confirm",
      name: "confirmAddProject",
      message: "Would you like to enter another project?",
      default: false,
    },
  ])
   .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });
  
// const fs = require("fs");

// const generatePage = require('./src/page-template.js')

// const pageHTML = generatePage(name, github);

// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });
