# Engineering Project 3: Team Code4Fun

Contributors: Ian King, Mubashar Ali, Ed Packard and Graeme Stirling.

## Description

This is our third and final group engineering project from the Makers Academy coding bootcamp. Our group was formed of individuals interested in creating a learning platform for teaching coding in a fun way. During discussion about the direction of our project we settled on creating a quiz app with vibrant colour themes and engaging stories. The questions would not be designed for a specific language and instead focus on teaching basic coding fundamentals.

## Technologies used

The four key technologies that make up application are MongoDB, Express, React, and Node.js. This combination in shorthand is descibed as a MERN stack. These are described below:

MongoDB - document database <br />
Express(.js) - Node.js web framework <br />
React(.js) - a client-side JavaScript framework <br />
Node(.js) - the premier JavaScript web server <br />

Jest/React testing library - A Javascript testing framework and library

## Initial Setup

Clone this repo

```
https://github.com/moby-codes/makers-final-project.git
```

Open the root directory of the project inside your terminal and run the following command

```
npm install
```

Then open the `client` folder and run `npm install` again.

## Set up the database config.env file

In root directory, create a new file `config.env` containing the following:

```
ATLAS_URI=mongodb+srv://mern:<password>@finalproject.xik8i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

Make sure to change <password> to the DB password.

## Running tests

From the root directory of the project:

```
cd client
npm test
```

Type `a` to run all test suites.

## Starting the application

Open up the `client` directory in the terminal and run `npm start`

Open the root directory in another terminal and run `npm start`

Now visit `http://localhost:3000/`
