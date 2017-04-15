
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1, title: 'rowValue1', description: '', over_21: true, start_datetime: '', end_datetime: ''},
        {id: 2, title: 'rowValue2', description: '', over_21: true, start_datetime: '', end_datetime: ''},
        {id: 3, title: 'rowValue3', description: '', over_21: true, start_datetime: '', end_datetime: ''}
      ]);
    });
};
