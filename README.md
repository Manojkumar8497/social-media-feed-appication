<p align="center">
    <img src="https://github.com/Manojkumar8497/social-media-feed-appication/blob/master/images/project-logo.png" alt="Logo">

  <h1 align="center">Social Media Feed Application</h1>
  <p align="center">This is a simple Instagram like feed application. This application featured with infinite scrolling and multer image uploading. By using this application, you can post your image or any content and you can also like the post.</p>
</p>

## Demo

<p align="center">
  <img src="https://github.com/Manojkumar8497/social-media-feed-appication/blob/master/images/demo.gif"/>
</p>

This project is developed by using MEAN (MongoDB, express.js, Angular, Node.js). MEAN is a set of open source components that together, provide an end-to-end framework for building dynamic web applications. The stack is made up of:

<li><b>M</b>ongoDB: Document database</li>
<li><b>E</b>xpress: Back-end Node.js web application framework</li>
<li><b>A</b>ngular: Front-end web application framework</li>
<li><b>N</b>ode.js: JavaScript runtime environment</li>

## Live Demo

This project is deployed in [Heroku](https://www.heroku.com/). Please visit this link (https://feeds-app-mean.herokuapp.com/feeds) to preview the application.

## Platforms

In this application, I used [Node.js(14.3.0)](https://nodejs.org/), [Express.js(4.17.1)](https://expressjs.com/) as the back-end, [Angular 9](https://angular.io/) as the Front-end and [MongoDB](https://www.mongodb.com/try/download/community) as a database. I used [postman](https://www.postman.com/) platform for API request & Response and [VScode](https://code.visualstudio.com/) as an IDE.

## Development Server

This project is divided into two folder structure, one is client folder where all the frontend code (Angular 9) stays there and rest of the files are backend code (node.js, express.js).

<b>To run this application:</b>
Run `npm install` to install all the needed packages for the backend(node.js), after the process finished. Navigate to the client folder in the project and then Run `npm install` to install all the needed packages for the frontend(Angular 9). In the project folder, Run `npm run dev` to start the development server. The development server is listing to the port 3000. Make sure you should install MongoDB application in your PC for the database connection.

<b>Note:</b> The both frontend and backend runs in the same port 3000. Because of this if you change any code in the client folder. you have to run the `ng build` command in client folder or `npm run dev` in the backend folder. Only then you can able to see the changes in the 3000 port.

## API End Points

You can access the following endpoints on [http://localhost:3000/api/v1.0.0](http://localhost:3000/api/v1.0.0)

| METHOD | URL                   | Description                     |
|--------|-----------------------|---------------------------------|
| GET    | /feeds                | Return the all feeds            |
| GET    | /feeds?page=1&limit=2 | Return the feeds based on query |
| POST   | /feed                 | Create a new feed               |
| PATCH  | /feeds/:id            | To update the feed like count   |

<b>Note:</b> You need to pass the formData as a request body in POST method.

## More Updates

Follow me on [LinkedIn](https://www.linkedin.com/in/manoj-m8497/) to get the latest update about features, code, and more. If you like this project give a star to this repo.

## Thanks

Thanks to all contributors and their support.

If you have an idea or you want to do something, tell me or just do it!

I'm always happy to hear your feedback!

## Copyright and license

Code and documentation copyright 2020 the authors. Code released under the [MIT License](https://github.com/Manojkumar8497/social-media-feed-appication/blob/master/LICENSE).
