
exports.up = function(knex, Promise) {
  return knex.schema.createTable('venues', (t) => {
    t.increments()
    t.string('title').notNullable()
    t.integer('capacity').notNullable()
    t.string('line_1').notNullable()
    t.string('line_2')
    t.string('city').notNullable()
    t.integer('zip').notNullable()
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('venues')
}
