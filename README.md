# Express Backend Starter

This backend server is the structure that I like to follow and that I think fits best for a Node, Express, Relational Database + Objection + Knex.js. It's simple and seperates everything out nicely.

### More Info

The thing about Node, is that there are a ton of different ways of doing things. This is just one of many other solutions on how a project should be structured.

The project mainly follows [Bulletproof node.js project architecture](https://softwareontheroad.com/ideal-nodejs-project-structure/) but I added/changed a few things in which I think makes this structure better and simpler (example, a Pub/Sub layer is not implement), plus it works with Objection.js + Knex!

To explain quickly how this structure works, you essentially have a 3 layer artchiture.

![alt text](https://softwareontheroad.com/static/122dab3154cb7e417bbb210bbce7ca01/8299d/server_layers.jpg)

- The controller layer will be using express to simply call service methods, _that's it_. These controllers define the enpoints.
- The service layer will be classes that communicate with the Objection models, they communicate with each other and do all the business logic we need. They never take in an express request or response object.
- The data access layer are simply the models we define with Objection, this can contain custom virtual attributes, definitions of our relation mapping, etc.

### Requirements

- Node v12
- NPM v6
- A MySQL server running somewhere

### Steps

###### _Note that knexjs uses default port connection for mysql_

- In the my MySQL server, create a database

- Run the migrations and seeding with knex

- npm install

- Copy the .env.example file and turn it too a .env file, update the env variables

- npm run start:dev

- Go to localhost:PORT/api/v1/users AND /api/v1/users/1 AND ... to see the error object, go to /api/v1/users/1234

## Conclusion

Please feel free to open an issue or pull request so we can discuss some more ideas on how to improve this architecure! Please note that this is simply a building block to get started on a solid node project, anything related to Docker, Jenkins, etc. are left out since everyone will have a different solution. This project simply serves as a base lane to get started and add whatever you want.
