
exports.seed = function(knex, Promise) {
  return knex('patrons').del()
    .then(function () {
      return knex('patrons').insert([
        {
          id: 1, first_name: 'Alyssa', last_name: 'Evans', email: 'alyssa@email.com', birthdate: '1991-01-09'
        },
        {
          id: 2, first_name: 'Brendon', last_name: 'Helgason', email: 'brendon@email.com', birthdate: '1985-05-02'
        },
        {
          id: 3, first_name: 'Sophie', last_name: 'Helgason', email: 'sophie@email.com', birthdate: '2016-01-06'
        }
      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('patrons_id_seq', (SELECT MAX (id) FROM patrons))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error);
    })
}
