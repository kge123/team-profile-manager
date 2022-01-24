function writeHtml(team) {
  //create a function that returns the manager section of html
  function createManager(manager) {
    return `
    <h1>${manager.name}</h1>
        `;
  }

  //create a function that returns the engineer section of html
  function createEngineer(engineer) {
    return `
      `;
  }

  //create a function that returns the intern section of html
  function createIntern(intern) {
    return `
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
      <title>Document</title>
  </head>
  <body>
      ${writeHtml(data)}
  </body>
  </html>
    `;
}
module.exports = generateHTML;
