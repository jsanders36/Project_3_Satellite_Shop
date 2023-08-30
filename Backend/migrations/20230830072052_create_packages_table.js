/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('packages', table => {
        table.increments();
        table.string('name');
        table.string('mission_description');
        table.string('approval_status');
        table.integer('user_id');
        table.foreign('user_id').references('users.id');
    }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('packages', table => {
        table.dropForeign('user_id')
    })  
    .then(function() {
        return knex.schema.dropTableIfExists('packages');
    });
};
