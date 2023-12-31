/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('assets_packages', table => {
        table.increments();
        table.integer('assets_id');
        table.foreign('assets_id').references(`assets.id`);
        table.integer('packages_id');
        table.foreign('packages_id').references(`packages.id`);
    }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('assets_packages', table => {
        table.dropForeign('assets_id')
        table.dropForeign('packages_id')
    })  
    .then(function() {
        return knex.schema.dropTableIfExists('assets_packages');
    });
};
