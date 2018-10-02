exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_social', (table) => {
        table.increments();
        table.string('name').unique().notNullable();
        table.string('userid').unique().notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_social');
};
