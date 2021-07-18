# Express Backend Starter

This backend server is the structure that I like to follow and that I think fits best for a Node, Express, Relational Database (MySQL) + Objection + Knex.js. It's simple and seperates everything out nicely.

### More Info

The thing about Node, is that there are a ton of different ways of doing things. This is just one of many other solutions on how a project should be structured. This is how I personally like to structure my projects, your opinions may differ of course.

The project mainly follows [Bulletproof node.js project architecture](https://softwareontheroad.com/ideal-nodejs-project-structure/) but I added/changed a few things in which I think makes this structure better and simpler (example, a Pub/Sub layer are not implement), plus it works with Objection.js + Knex out of the box.

To explain quickly how this structure works, you essentially have a 3 layer artchiture.

![alt text](https://softwareontheroad.com/static/122dab3154cb7e417bbb210bbce7ca01/8299d/server_layers.jpg)

- The controller layer will be using express to simply call service methods, _that's it_. These controllers define the enpoints. The endpoints should, for the most part, just call whatever service method does the needed action for the endpoint. The "controllers" are called routes throughout this structure.
- The service layer will be classes that communicate with the Objection models, they communicate with each other and do all the business logic we need. They **never** take in an express request or response object.
- The data access layer are simply the models we define with Objection, this can contain custom virtual attributes, definitions of our relation mapping, etc.

### Requirements

- Node v12
- NPM v6
- Docker, if you wish to run up the docker-compose to have a mysql container.

### Steps

###### _Note that this project uses a MySQL database, but feel free to change this out for anything_

- run `docker-compose up`

- Connect to the mysql server and create a database. (in this project it's called 'test').

- run `npm install`

- Run the migrations and seeding with the knex command lines. Easiest way to do this would be with the following command: `npm run knex:latest` and `npm run knex:seed` to run the seeds.

- Copy the .env.example file and turn it too a .env file, update the env variables accordingly, especially if you made any changes.

- Run the following command: `npm run start:dev`

- Go to localhost:PORT/api/users AND /api/users/1 AND... to see the Error class and error middleware, go to /api/users/1234

## Conclusion

Please feel free to open an issue or pull request so we can discuss some more ideas on how to improve this architecure! Please note that this is simply a building block to get started on a solid node project, anything related to in-depth Docker, Jenkins, pipelines, etc. are left out since everyone will have a different requirement. This project simply serves as a base lane to get started and add whatever you want. **The idea is that it's easy to add anything you want/need to this project.** The npm modules in this project are the bare minimum to get started, as everyones strategy will be different, ex. using Yup instead of Joi for object validation, for example.
