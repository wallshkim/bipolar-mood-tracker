# MoodMap

## Description

This is a React movie application. A user can see movies that exist in the database. They are also able to see a detailed view for each individual movie, including genres associated with that movie. The user can also edit each movie's information. The user will be taken through 3 views (movie list page, details page, and edit page) and have the option to go back to the home or previous page if desired.

## Prerequisites
- Node.js

## Screen Shot
![home](./images/home.png)

![details](./images/details.png)

![edit](./images/edit.png)

## Getting Started
- npm install
- npm run server
- npm run client

## Usage
1. User begins on the home page which shows the poster for every movie in the database. From here, a user is able to click the info icon in order to go to the details page to learn more about the movie.
2. The user will be taken to a new view where they can see the movie title, description, and associated genres, if there are any. The user has the option to navigate back to the movie list page by clicking "Back to List" or to edit the movie details by clicking "Edit."
3. If the user clicks "Edit", they will be taken to a new view where there are two input fields: (1) Title, (2) Description. The fields will show the current information in the database but the user is able to update one or both of the fields and click "Save" in order to update the database. Once the user clicks "Save", they will be navigated back to the details page to see their updates.
4. If the user does not wish to edit either of the fields, they may simply click "Cancel" and they will be routed back to the details page without the database updating.

## Built With
- React
- Redux
- Redux-Saga
- Axios
- JavaScript
- Node.js
- Material-UI

## Acknowledgement
Thank you to Prime Digital Academy for equipping me with the knowledge and tools to create this application.


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

* Start postgres if not running already by using `brew services start postgresql`
* Run `npm start`
* Navigate to `localhost:5000`

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

* src/components
  * App/App
  * Footer/Footer
  * Nav/Nav
  * AboutPage/AboutPage
  * InfoPage/InfoPage
  * UserPage/UserPage
  * LoginPage/LoginPage
  * RegisterPage/RegisterPage
  * LogOutButton/LogOutButton
  * ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
