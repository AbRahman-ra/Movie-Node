// INITIALIZATION OF MODULES
const fileSystem = require("fs");
const httpServer = require("http");
const url = require("url");
const express = require("express");
const app = express();
require("dotenv").config("./.env");
const PORT = process.env.PORT || 3000;

// INITIALIZATION OF DOCUMENTS
const indexTemplate = fileSystem.readFileSync(
  "./templates/index.html",
  "utf-8"
);
const moviesCardsTemplate = fileSystem.readFileSync(
  "./templates/movie-main.html",
  "utf-8"
);
const moviePageTemplate = fileSystem.readFileSync(
  "./templates/movie-inside.html",
  "utf-8"
);

// INITIALIZATION OF DATA
const jsonData = fileSystem.readFileSync("./movies.json", "utf8");
const jsonDataObj = JSON.parse(jsonData);

//INITIALIZATION OF FUNCTION
function fillTemplate(htmlTemplate, jsonData) {
  let filledTemplate = htmlTemplate.replace(/{movieName}/g, jsonData.movieName);
  filledTemplate = filledTemplate.replace(/{id}/g, jsonData.id);
  filledTemplate = filledTemplate.replace(/{imageName}/g, jsonData.imageName);
  filledTemplate = filledTemplate.replace(/{alt}/g, jsonData.alt);
  filledTemplate = filledTemplate.replace(/{category}/g, jsonData.category);
  filledTemplate = filledTemplate.replace(
    /{releaseYear}/g,
    jsonData.releaseYear
  );
  filledTemplate = filledTemplate.replace(/{rating}/g, jsonData.rating);
  filledTemplate = filledTemplate.replace(
    /{movieDescription}/g,
    jsonData.movieDescription
  );

  jsonData.SFW
    ? (filledTemplate = filledTemplate.replace(/{SFW}/g, "SFW"))
    : (filledTemplate = filledTemplate.replace(/{SFW}/g, "NSFW"));

  return filledTemplate;
}

// INITIALIZATION OF SERVER
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("/js", express.static(__dirname + "public/js"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  const moviesContent = jsonDataObj
    .map((movie) => fillTemplate(moviesCardsTemplate, movie))
    .join("");
  let wholeContent = indexTemplate.replace("{movies}", moviesContent);
  let currentYear = new Date().getFullYear();
  wholeContent = wholeContent.replace(/{currentYear}/g, currentYear);
  res.send(wholeContent);
});

app.get("/index.html", (req, res) => {
  const moviesContent = jsonDataObj
    .map((movie) => fillTemplate(moviesCardsTemplate, movie))
    .join("");
  let wholeContent = indexTemplate.replace("{movies}", moviesContent);
  let currentYear = new Date().getFullYear();
  wholeContent = wholeContent.replace(/{currentYear}/g, currentYear);
  res.send(wholeContent);
});

app.get("/main", (req, res) => {
  const moviesContent = jsonDataObj
    .map((movie) => fillTemplate(moviesCardsTemplate, movie))
    .join("");
  let wholeContent = indexTemplate.replace("{movies}", moviesContent);
  let currentYear = new Date().getFullYear();
  wholeContent = wholeContent.replace(/{currentYear}/g, currentYear);
  res.send(wholeContent);
});

app.get("/movie", (req, res) => {
  const { query } = url.parse(req.url, true);
  const targetMovie = jsonDataObj[query.id];
  const movieInfo = fillTemplate(moviePageTemplate, targetMovie);
  res.send(movieInfo);
});
