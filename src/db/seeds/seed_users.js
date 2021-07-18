if (process.env.NODE_ENV === "production") {
  throw new Error("Can't run seeds in production");
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Luke Skywalker",
          description: "Force user"
        },
        {
          name: "Harry Potter",
          description: "Wizard"
        }
      ]);
    });
};
