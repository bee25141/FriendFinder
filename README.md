# FriendFinder
Web application to find friends
![Home](images/home.png)
View Deployment: https://friendfindertb.herokuapp.com/

FriendFinder is an application that finds the user's most compatible friend for users based on a personality assessment. User's first complete a 10 question survey where the are given a scenario, and they choose on a scale from one to five whether or not they agree with the scenario.
![Survey1](images/survey1.png)
![Survey2](images/survey2.png)

Once the survey is complete and the user clicks submit, their score is totaled up and matched with the friend stored in our data that has the least amount of difference between total scores. This is done through an AJAX post api call where the users data that they input from the survey is sent as an object, and we're returned with the most compatible friend displayed on a modal.
![Most_Compatible_Friend](images/modal.png)

# Built With
Node.js <br>
Express.js <br>
Heroku for application deployment <br>
JavaScript <br>
Bootstrap CSS Framework <br>
jQuery <br>
HTML <br>
# Authors
Tony Bee

