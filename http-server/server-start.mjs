import { createServer } from 'http';
import chalk from 'chalk';

const server = createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  const body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node.js Demo</title>
        </head>
        <body style="background-color:rgb(15,17,22)">
            <h1 style="color:green;"> Hola Github! </h1>
        </body>
        </html>
        `;

  response.end(body);
});

server.listen(8080, () => {
  console.log(
    chalk.green.underline.bold(`Server is listening`)
    + chalk.green(` to `)
    + chalk.blueBright.underline(`http://localhost:${server.address().port}`),
  );
});
