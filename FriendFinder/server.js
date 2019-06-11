const express = require("express");
const path = require("path");

var friendsData = require("./app/data/friends.js");

//Declaring the express server
const app = express();

// Sets an initial port
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Router to direct server to display different web pages or get data from the api
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener to detect server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});