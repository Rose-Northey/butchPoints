/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('relationships',function(table){
    table.increments('id').primary()
    table.string('status')
    table.string('top_name')
    table.integer('top_points')
    table.string('top_access_token')
    table.string('top_email')
    table.string('bottom_name')
    table.integer('bottom_points')
    table.string('bottom_access_token')
    table.string('bottom_email')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex){
  return knex.schema.dropTable('relationships')
};
