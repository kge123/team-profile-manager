function writeHtml(team) {
  //create a function that returns the manager section of html
  function createManager(manager) {
    return `
    <div class="col">
      <p>Manager Name</p>
      <h2>${manager.getName()}</h2>
      <p>Manager ID#</p>
      <p>${manager.getId()}</p>
      <p>Manager Email</p>
      <p><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
      <p>Manager Office</p>
      <p>${manager.getofficeNumber()}</p>
    </div>  
        `;
  }

  //create a function that returns the engineer section of html
  function createEngineer(engineer) {
    return `
    <div class="col">
      <p>Engineer Name</p>
      <h2>${engineer.getName()}</h2>
      <p>Engineer ID#</p>
      <p>${engineer.getId()}</p>
      <p>Engineer Email</p>
      <p><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
      <p>Engineer Github</p>
      <p><a href="https://www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
    </div>
      `;
  }

  //create a function that returns the intern section of html
  function createIntern(intern) {
    return `
    <div class="col">
      <p>Intern Name</p>
      <h2>${intern.getName()}</h2>
      <p>Intern ID#</p>
      <p>${intern.getId()}</p>
      <p>Intern email</p>
      <p><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
      <p>Intern School</p>
      <p>${intern.getSchool()}</p>
    </div>  
      `;
  }

  //create an html array
  const html = [];
  //create filter for all the roles after the filter push the filtered employee to the html array
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
  ); 

  return html.join("");
}

function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <title>TeamProfileManager</title>
  </head>
  <center>Team Members</center>
  <body>
    <div class="row">
      ${writeHtml(data)}
    </div>  
  </body>
  </html>
    `;
}
module.exports = generateHTML;
