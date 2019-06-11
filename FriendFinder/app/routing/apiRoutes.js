//Linking route to data
var friendsData = require("../data/friends.js");

module.exports = function (app) {
    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    // API POST Requests
    app.post('/api/friends', function (req, res) {

        var userInput = req.body;

        for (var i = 0; i < userInput.scores.length; i++) {
            userInput.scores[i] = parseInt(userInput.scores[i]);
        }

        var friendIndex = 0;
        var differenceMin = 40;

        for (var i = 0; i < friendsData.length; i++) {
            var diffTotal = 0;
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                var difference = Math.abs(userInput.scores[j] - friendsData[i].scores[j]);
                diffTotal += difference;
            }

            if (diffTotal < differenceMin) {
                friendIndex = i;
                differenceMin = diffTotal;
            }
        }

        friendsData.push(userInput);
        res.json(friendsData[friendIndex]);
    });
};