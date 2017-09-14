// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = ("./models/Article");
var Note = ("./models/Note");

// Create a new express app
var app = express();
var request = require('request');
var cheerio = require('cheerio');

mongoose.promise = Promise;
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;
// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));
// -------------------------------------------------
// MongoDB configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localHost/reactScrape");
var db = mongoose.connection;
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});
// -------------------------------------------------
// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
app.get("/scrape", function(req, res) {
  request("https://chasmosaurs.blogspot.com/", function(error, response, html) {

    var $ = cheerio.load(html);

      $('h3.post-title').each(function(i, element){

        var result = [];

          var title = $(this).children("a").text();
          var link = $(this).children("a").attr("href");

          result.push({
            title: title,
            link: link
          });

          var bulk = Article.collection;

          bulk.insertMany(result);
      });
  });
});

app.listen(PORT, function() {
  console.log("App running on port " + PORT +"!");
});


