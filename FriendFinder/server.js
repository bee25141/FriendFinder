const express = require("express");

//Declaring the express server
const app = express();

// Sets an initial port
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router to direct server to display different web pages or get data from the api
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener to detect server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
