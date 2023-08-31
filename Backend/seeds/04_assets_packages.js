/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('assets_packages').del()
  await knex('assets_packages').insert([
    {assets_id: 1, packages_id: 1},
    {assets_id: 7, packages_id: 1},
    {assets_id: 9, packages_id: 1},
    {assets_id: 18, packages_id: 1},
    {assets_id: 19, packages_id: 1},
    {assets_id: 20, packages_id: 1}
  ]);
};
