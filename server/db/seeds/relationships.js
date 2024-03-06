/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('relationships').del()
  await knex('relationships').insert([
    {id: 1, status: 'pending', top_name:'Random Dude', top_points:1, top_access_token:'auth:123', top_email:'rad@gmail.com', bottom_email: 'roseanorthey@gmail.com'},
  ]);
};