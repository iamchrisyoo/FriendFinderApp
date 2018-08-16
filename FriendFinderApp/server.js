//dependencies

var express = require("express");
var bodyParser = require("body-parser");

//express config
var app = express();

var PORT = process.env.PORT || 8080;

//set up bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
