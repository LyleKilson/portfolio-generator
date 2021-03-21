const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      message: "What is your name?",
      type: "input",
      name: "name"
    },
  ])

  .then((answers) => console.log(answers));

// const fs = require("fs");

// const generatePage = require('./src/page-template.js')

// const pageHTML = generatePage(name, github);

// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });
