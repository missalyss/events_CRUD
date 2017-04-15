
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (t) => {
    t.increments()
    t.string('title').notNullable()
    t.text('description')
    t.boolean('over_21').notNullable()
    t.date('start_datetime').notNullable()
    t.date('end_datetime').notNullable()
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
}
