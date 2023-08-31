/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE packages CASCADE');
  await knex('packages').del()
  await knex('packages').insert([
    {name: 'Package', mission_description: 'A nice description of some package', approval_status: false, users_id: 1}
  ]);
};
