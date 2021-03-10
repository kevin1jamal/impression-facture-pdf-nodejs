# impression-facture-pdf-nodejs
ce projet est un module nodejs qui permet de generer un pdf ou un ticket et lancer l'imprimante directement
# Getting started
To get the Node server running locally:
- Clone this repo
- `npm install` to install all required dependencies

- `node app.js` to start the local server

# Code Overview
## Dependencies
- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [html-pdf] - For generating pdf from  html structure
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 
- [pdf-to-printer]-  for printing pdf.

## Application Structure
- `app.js` - The entry point to our application. This file defines our express server 
