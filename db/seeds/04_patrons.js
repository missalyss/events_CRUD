
exports.seed = function(knex, Promise) {
  return knex('patrons').del()
    .then(function () {
      return knex('patrons').insert([
        {
          id: 1, first_name: 'Alyssa', last_name: 'Evans', email: 'alyssa@email.com', birthdate: 01-09-1991
        },
        {
          id: 2, first_name: 'Brendon', last_name: 'Helgason', email: 'brendon@email.com', birthdate: 05-02-1985
        },
        {
          id: 3, first_name: 'Sophie', last_name: 'Helgason', email: 'sophie@email.com', birthdate: 01-06-2016
        }
      ])
    })
}
