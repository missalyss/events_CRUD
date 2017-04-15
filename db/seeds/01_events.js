
exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function () {
      return knex('events').insert([
        {
          id: 1, title: 'Devil\'s Advocates', description: 'All around sexy fun!', over_21: true, start_datetime: '01-09-2017 8pm', end_datetime: '01-09-2017 10pm', venue_id: 1
        },
        {
          id: 2, title: 'Glitter Abuse', description: 'GOTH BURLESQUE NIGHT', over_21: false, start_datetime: '02-09-2017 8pm', end_datetime: '02-09-2017 10pm', venue_id: 2
        },
        {
          id: 3, title: 'Glittery Titty', description: 'Titties!!!!!!', over_21: true, start_datetime: '03-09-2017 8pm', end_datetime: '03-09-2017 10pm', venue_id: 3
        }
      ])
    })
}
