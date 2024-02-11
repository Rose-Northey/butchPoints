/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('profiles').del()
  await knex('profiles').insert([
    {
      id: 1,
      user_token: 'auth0|123',
      first_name: 'Samira',
      last_name: 'Wiley',
      email_address: 'samirawiley56@gmail.com',
      butch_points: 0,
      partner_id: 2,
    },
    {
      id: 2,
      user_token: 'auth0|124',
      first_name: 'Lauren',
      last_name: 'Morelli',
      email_address: 'laurenmorelli6@gmail.com',
      butch_points: 0,
      partner_id: 1,
    },
  ])
}
