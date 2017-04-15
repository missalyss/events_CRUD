
exports.up = function(knex, Promise) {
  return knex.schema.createTable('patrons', (t) => {
    t.increments()
    t.string('first_name').notNullable()
    t.string('last_name').notNullable()
    t.string('email').notNullable()
    t.date('birthdate').notNullable()
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patrons')
}
