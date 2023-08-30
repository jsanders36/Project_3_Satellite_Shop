/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { username: 'SolarSail', password: 'Sunny123', is_admin: true, profile_image: 'https://labs.openai.com/s/QJY5khDQ2RZHhbl0als9pLMo' },
    { username: 'OrbitGem', password: 'Starlight456', is_admin: false, profile_image: 'https://labs.openai.com/s/hodj2AFJviktSvo4Eltii7dD' },
    { username: 'NovaSpark', password: 'Moonbeam789', is_admin: false, profile_image: 'https://labs.openai.com/s/QJY5khDQ2RZHhbl0als9pLMo' }
  ]);
};
