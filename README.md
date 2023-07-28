# Movie-Node

## [Deployed Webpage](https://node-movies.onrender.com/)

---

## My Very First Node.js Project

As you see, this is the first dynamic web application. Made using node.js on the server side. HTML, CSS & vanilla JS on the client stack.

---

## Features

- [x] The web application is fully dynamic
- [x] The web application is fully responsive
- [x] The web application is accessible

---

## How to Add Your Movies Into The Website?

1. Download the movie poster in jpg / png extension
1. Save the image with proper name (preferably in camel-case) in the public/images folder
1. Open movies.json & app.js files using VSCode
1. In the movies.json file, go to the last object, add a comma then copy the last object and paste it after the comma
   - Object is curly braces followed by some key-value content `{ "key": "value" }`
   - Make sure your copied object ends before the square brackets `]`
1. change the id to the next id, and fill all the data. Make sure you type the image name correctly followed by the extension
1. Don't add or remove any double quotes from the json file
1. Write proper alt text, description & fill all the other fields
1. If the movie is NSFW or R categorized, mark the value in the "SFW" key inside your object as false. True otherwise
1. Save your json file
1. Install Node.js from [here](https://nodejs.org/en) if you don't have it
1. Open your VSCode terminal by clicking ` ctrl + `` `
1. Type the following commands in order in the terminal, wait for each command to finish
   - npm install
   - nodemon app.js
1. In your browser, go to the following address `127.0.0.1:8000/`
1. Every time you update your json file, just click `ctrl + s` to your app.js file and reload the open page
