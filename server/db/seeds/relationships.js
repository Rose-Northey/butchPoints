/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('relationships').del()
  await knex('relationships').insert([
    {id: 1, status: 'pending', top_name:'Random Dude', top_points:1, top_access_token:'auth:123', top_email:'rad@gmail.com', bottom_email: 'roseanorthey@gmail.com'},
    {id: 2, status: 'pending', top_name:'Random Dude 2', top_points:1, top_access_token:'auth:124', top_email:'rad2@gmail.com', bottom_email: 'roseanorthey@gmail.com'},
    {id: 3, status: 'pending', top_name:'Random Dude 3', top_points:1, top_access_token:'auth:125', top_email:'rad3@gmail.com', bottom_email: 'annanorthey@gmail.com'},
  ]);
};