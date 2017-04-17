
exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function () {
      return knex('events').insert([
        {
          id: 1, title: 'Devil\'s Advocates', description: 'All around sexy fun!', over_21: true, start_datetime: 'Jan 9, 2017 8pm', end_datetime: 'Jan 9, 2017 10pm', venue_id: 1
        },
        {
          id: 2, title: 'Glitter Abuse', description: 'GOTH BURLESQUE NIGHT', over_21: false, start_datetime: 'Feb 9, 2017 8pm', end_datetime: 'Feb 9, 2017 10pm', venue_id: 2
        },
        {
          id: 3, title: 'Glittery Titty', description: 'Titties!!!!!!', over_21: true, start_datetime: 'Mar 9, 2017 8pm', end_datetime: 'Mar 9, 2017 10pm', venue_id: 3
        }
      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('events_id_seq', (SELECT MAX (id) FROM events))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error);
    })
}
