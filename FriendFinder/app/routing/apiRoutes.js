//Linking route to data
var friendsData = require("../data/friends.js");

module.exports = function(app) {
  // API GET Requests
  app.get("/api/tables", function(req, res) {
    res.json();
  });

  app.get("/api/waitlist", function(req, res) {
    res.json();
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
      friendsData.push(req.body);
      res.json(true);
  });
};
