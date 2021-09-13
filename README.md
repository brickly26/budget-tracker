# Fitness Tracker

## Description

In this assignment assignment I created a web app that allows a user to tracker their expenses. This is done by using a service worker which allows us to cache front end files on the users device, so that they can revisit the app offline and still be able to use it. I also used IndexDB which allows us to store the users expenses on their device until they come back online. This way the data is not lost while the user is offline.

## Table of Contents

- [Video](#Video)
- [Usage](#Usage)
- [Creator](#Creator)

## Video

This video shows the a the cached files and data. It shows the apps ability to run even when the user has no internet connection. It also shows the data being stored in IndexedDB when the user is offline, and shows that data being removed when the user comes back online.
![Video showing functionality](./video/mock.gif)


## Usage

You can use this App by visiting the Heroku deployment at [Budget Tracker](https://budget-tracker-ba.herokuapp.com/ "Budget Tracker").

Alternatively You can create a local instance of this app by:

- Cloning the git repository onto your local machine 
- Type the command "npm i" to install all the node packages required for the application
- Make sure to seed the database with the command "npm run seed"
- Start the application by typing "npm start"
- The go to localhost:3000 in your browser to use the app

## Creator

#### Name : Burak Aksu
#### Email : Sabburak26@gmail.com
#### Github: Brickly26

If you have any question, please feel free to contact me at my email.