
exports.seed = function(knex, Promise) {
  return knex('venues').del()
    .then(function () {
      return knex('venues').insert([
        {
          id: 1, name: 'Jewelbox', capacity: 50, line_1: '100 S', line_2: '1st Ave.', city: 'Seattle', state:'WA', zip: 12345
        },

        {
          id: 2, name: 'Grotto', capacity: 50, line_1: '100 S', line_2: '1st Ave.', city: 'Seattle', state:'WA', zip: 12345
        },

        {
          id: 3, name: 'Rendezvous', capacity: 50, line_1: '100 S', line_2: '1st Ave.', city: 'Seattle', state:'WA', zip: 12345
        }

      ])
    })
}
