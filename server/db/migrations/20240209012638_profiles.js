import { parseMutationFilterArgs } from "@tanstack/react-query"

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable('profiles',(table)=>{
    table.increments('id').primary()
    table.string('user_token')
    table.string('first_name')
    table.string('last_name')
    table.string('email_address')
    table.integer('butch_points')
    table.integer('partner_id').references('id').inTable('profiles')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.droptable('profiles')
};
