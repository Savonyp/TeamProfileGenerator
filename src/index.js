/* inquire package */
const inquirer = require('inquirer');
/* manage file data */
const fs = require('fs');

/* questions */
const questions = [  {    type: 'input',    name: 'name',    message: 'Enter the employee name:'  },  {    type: 'input',    name: 'id',    message: 'Enter the employee id:'  },  {    type: 'input',    name: 'email',    message: 'Enter the employee email:'  }];

/* team members */
const team = [];

function askQuestions() {
  inquirer
    .prompt(questions)
    .then(answers => {
      team.push(answers);
      console.log(`Employee added: ${answers.name}`);
      inquirer
        .prompt({
          type: 'confirm',
          name: 'again',
          message: 'Do you want to add another employee?'
        })
        .then(answers => {
          if (answers.again) {
            askQuestions();
          } else {
            generateHTML(team);
          }
        });
    });
}
/* Html */
function generateHTML(team) {
  const html = [];
/* need to add html path */
  fs.writeFileSync('index.html', html,);
  console.log('HTML file generated successfully.');
}

askQuestions();
