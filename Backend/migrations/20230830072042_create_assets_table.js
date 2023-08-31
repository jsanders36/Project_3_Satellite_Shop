/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('assets', table => {
        table.increments();
        table.string('name');
        table.string('mission_type');
        table.string('orbital_regime');
        table.string('description');
        table.string('image');
        table.integer('users_id');
        table.foreign('users_id').references(`users.id`);
    })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('assets', table => {
        table.dropForeign('users_id')
    })  
    .then(function() {
        return knex.schema.dropTableIfExists('assets');
    });
};
