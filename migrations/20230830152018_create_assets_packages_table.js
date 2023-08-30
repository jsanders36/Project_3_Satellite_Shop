/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('assets_packages', table => {
        table.increments();
        table.integer('user_id');
        table.foreign('user_id').references('users.id');
        table.integer('package_id');
        table.foreign('package_id').references('packages.id');
    }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('assets_packages', table => {
        table.dropForeign('user_id')
        table.dropForeign('package_id')
    })  
    .then(function() {
        return knex.schema.dropTableIfExists('assets_packages');
    });
};
