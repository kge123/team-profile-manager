const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];

const managerQuestions = [
  {
    type: "input",
    message: "What is the Manager name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the manager ID#?",
    name: "idNumber",
  },
  {
    type: "input",
    message: "What is the manager email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the managers office number?",
    name: "officeNumber",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the Interns name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is the Intern ID#?",
    name: "internId",
  },
  {
    type: "input",
    message: "What is the Intern email address?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "What is the Interns school?",
    name: "school",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the Engineer name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is the engineers ID#?",
    name: "engineerId",
  },
  {
    type: "input",
    message: "What is the engineers email address?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is the engineers github?",
    name: "github",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
function init() {
  function createManager() {
    inquirer.prompt(managerQuestions).then((answers) => {

      const manager = new Manager(
        answers.name,
        answers.idNumber,
        answers.email,
        answers.officeNumber
      );

      team.push(manager);

      buildteam();
      //writeToFile("index.html", generateHTML(answers));
    });
  }

  function createEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {

      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.github
      );

      team.push(engineer);

      buildteam();
    });
  }

  function createIntern() {

    inquirer.prompt(internQuestions).then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.school
      );

      team.push(intern);

      buildteam();
    });
  }

  function buildteam() {
    
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "what would you like to do?",
          choices: ["Add Intern", "Add Engineer", "Im done"],
        },
      ])
      .then((ans) => {
        switch (ans.choice) {
          case "Add Intern":
            createIntern()
            break;
          case "Add Engineer":
            createEngineer()
            break;
          default:
            renderHtml(team);
        }
      });
  }

  function renderHtml(team) {

    writeToFile("index.html", generateHTML(team));
  }

  createManager();

}

init();
