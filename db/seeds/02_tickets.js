
exports.seed = function(knex, Promise) {
  return knex('tickets').del()
    .then(function () {
      return knex('tickets').insert([
        {
          id: 1, type: 'GA', price: 15, event_id: 1, patron_id: 1
      },
        {
          id: 2, type: 'VIP', price: 15, event_id: 1, patron_id: 2
      },
        {
          id: 3, type: 'GA', price: 15, event_id: 2, patron_id: 3
      }
      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('tickets_id_seq', (SELECT MAX (id) FROM tickets))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error);
    })
}
