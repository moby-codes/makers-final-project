# Engineering Project 3: Team Code4Fun

Contributors: Ian King, Mubashar Ali, Ed Packard and Graeme Stirling. 

## Description

This is the third and last engineering project from the Makers Academy 12 week bootcamp. This group was formed of individuals interested in creating a learning platform for teaching coding in a fun way. During discussion about the direction of our project we settled on creating a quiz with vibrant colour themes and engaging stories. The questions would not be designed for a specific langauge and instead focus on teaching basic fundamentals.  

## Technologies used

The four key technologies that make up application are MongoDB, Express, React, and Node. This combination in shorthand is descibed as a MERN stack. These are described below:

MongoDB - document database <br />
Express(.js) - Node.js web framework <br />
React(.js) - a client-side JavaScript framework <br />
Node(.js) - the premier JavaScript web server <br />

Jest/React testing library - A Javascript testing framework and library

## initial setup 

clone this repo 
open folder inside your code editor and run the following command 

``` npm install ```

Then open the client folder and run the commnad again. 

## running tests 

type into the terminal 

``` cd client ```

followed by the command 

``` npm test ```

click 'a' to run all tests in this directory and the terminal will run all test suites. 

## Serving the application 

Open up the client folder in the terminal 

Open the main folder in a second terminal window

Once both these are open start the server by typing the following command in both terminal windows 

``` npm start ``` 

This initialise the server and client side of the application. 


## Set up the database config.env file

In root directory, create a new file `config.env` containing the following:

```
ATLAS_URI=mongodb+srv://mern:<password>@finalproject.xik8i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

Make sure to change <password> to the DB password.
...
