
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('patrons_tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('patrons_tickets').insert([
        {patron_id: 1, ticket_id: 1},
        {patron_id: 2, ticket_id: 1},
        {patron_id: 3, ticket_id: 4},
        {patron_id: 2, ticket_id: 2},
        {patron_id: 1, ticket_id: 3},
        {patron_id: 3, ticket_id: 3},
      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('patrons_id_seq', (SELECT MAX (id) FROM patrons))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error);
    })
}
